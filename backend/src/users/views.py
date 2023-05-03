import flask
from flask import jsonify
from flask_cors import CORS, cross_origin

from src import app, db
from src.models import User, Coach


@app.route('/register', methods=['POST'])
@cross_origin()
def register():
    handle = flask.request.json
    first_name = handle['first_name']
    last_name = handle['last_name']
    phone = handle['phone']
    email = handle['email']
    password = handle['password']
    is_user = handle['user']
    is_coach = handle['coach']
    if is_user and is_coach:
        return jsonify({'message': 'You cannot be both of them asshole'})
    else:
        if is_user:
            user = User(first_name=first_name, last_name=last_name, phone=phone,
                        info="No Info", email=email, password=password)
            db.session.add(user)
            access_token = user.generate_access_token()
        elif is_coach:
            coach = Coach(first_name=first_name, last_name=last_name, phone=phone,
                          rewards="No Rewards", email=email, password=password)
            db.session.add(coach)
            access_token = coach.generate_access_token()
        else:
            return jsonify({'message': 'You cannot be none of them asshole'})
        db.session.commit()
        return jsonify(access_token=access_token)


@app.route('/login', methods=['POST'])
@cross_origin()
def login():
    email = flask.request.json['email']
    password = flask.request.json['password']
    user = User.query.filter_by(email=email).first()
    coach = Coach.query.filter_by(email=email).first()
    if user and user.check_password(password):
        access_token = user.generate_access_token()
        return jsonify(access_token=access_token)
    elif coach and coach.check_password(password):
        access_token = coach.generate_access_token()
        return jsonify(access_token=access_token)
    else:
        return jsonify({'error': 'Invalid email or password'})
