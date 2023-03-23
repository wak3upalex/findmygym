import flask
from flask import request, jsonify, Blueprint
from flask_jwt_extended import unset_jwt_cookies
from sqlalchemy.exc import IntegrityError

from src import db
from src.models import User

users = Blueprint('users', __name__)


@users.route('/register', methods=['POST'])
def register():
    first_name = flask.request.json['first_name']
    last_name = flask.request.json['last_name']
    phone = flask.request.json['phone']
    email = flask.request.json['email']
    occupation = flask.request.json['occupation']
    password = flask.request.json['password']
    user = User(first_name=first_name, last_name=last_name, phone=phone,
                email=email, occupation=occupation, password=password)
    try:
        db.session.add(user)
        db.session.commit()
        access_token = user.generate_access_token()
        return jsonify(access_token=access_token)
    except IntegrityError:
        db.session.rollback()
        return jsonify({'error': 'Email address already exists'}), 400
    finally:
        db.session.close()


@users.route('/login', methods=['POST'])
def login():
    email = flask.request.json['email']
    password = flask.request.json['password']
    user = User.query.filter_by(email=email).first()
    if user and user.check_password(password):
        access_token = user.generate_access_token()
        return jsonify(access_token=access_token)
    else:
        return jsonify({'error': 'Invalid email or password'})


@users.route('/logout', methods=['GET'])
def logout():
    unset_jwt_cookies()
    return jsonify({'message': 'Logout successful'})
