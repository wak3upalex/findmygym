from flask import render_template, request, jsonify, url_for, redirect, Blueprint
from flask_jwt_extended import jwt_required
from sqlalchemy.exc import IntegrityError

from src import db
from src.models import User


users = Blueprint('users', __name__)


@users.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        phone = request.form['phone']
        email = request.form['email']
        password = request.form['password']
        user = User(first_name=first_name, last_name=last_name, phone=phone, email=email, password=password)
        try:
            db.session.add(user)
            db.session.commit()
            access_token = user.generate_access_token()
            return jsonify({'user': user.to_dict(), 'access_token': access_token}), 201, \
                {'Authorization': 'Bearer ' + access_token}
        except IntegrityError:
            db.session.rollback()
            return jsonify({'error': 'Email address already exists'}), 400
        finally:
            db.session.close()
    else:
        return render_template('register.html')


@users.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        user = User.query.filter_by(email=email).first()
        if user and user.check_password(password):
            access_token = user.generate_access_token()
            return redirect(url_for('user_profile.profile', access_token=access_token))
        else:
            return jsonify({'error': 'Invalid email or password'})
    else:
        return render_template('login.html')


@users.route('/logout')
@jwt_required()
def logout():
    return redirect(url_for('main.index'))
