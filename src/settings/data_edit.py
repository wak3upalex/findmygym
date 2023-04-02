import flask
from flask import jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash

from src import app, db
from src.models import User, Coach


@app.route('/profile/settings/change_data', methods=['PATCH'])
@jwt_required()
def change_data():
    handle = flask.request.json
    some_id = get_jwt_identity()
    user = User.query.get(some_id)
    coach = Coach.query.get(some_id)
    if user:
        if 'first_name' in handle:
            user.first_name = handle['first_name']
        if 'last_name' in handle:
            user.last_name = handle['last_name']
        if 'info' in handle:
            user.info = handle['info']
        if 'phone' in handle:
            user.phone = handle['phone']
        if 'email' in handle:
            user.email = handle['email']
        db.session.commit()
        return jsonify(user.json)
    else:
        if 'first_name' in handle:
            coach.first_name = handle['first_name']
        if 'last_name' in handle:
            coach.last_name = handle['last_name']
        if 'rewards' in handle:
            coach.rewards = handle['rewards']
        if 'phone' in handle:
            coach.phone = handle['phone']
        if 'email' in handle:
            coach.email = handle['email']
        db.session.commit()
        return jsonify(coach.json)


@app.route('/profile/settings/change_pass', methods=['PATCH'])
@jwt_required()
def change_password():
    some_id = get_jwt_identity()
    user = User.query.get(some_id)
    coach = Coach.query.get(some_id)
    handle = flask.request.json
    old_pass = handle['old_pass']
    confirm_old = handle['confirm_old']
    new_pass = handle['new_pass']
    confirm_new = handle['confirm_new']
    if old_pass is not confirm_old:
        return jsonify({'message': 'old passwords are not the same'})
    if new_pass is not confirm_new:
        return jsonify({'message': 'new passwords are not the same'})
    if user:
        if user.check_password(old_pass):
            user.password = generate_password_hash(new_pass)
            db.session.commit()
            return jsonify(user.json)
        else:
            return jsonify({'message': 'Old password is incorrect!'})
    else:
        if coach.check_password(old_pass):
            coach.password = generate_password_hash(new_pass)
            db.session.commit()
            return jsonify(coach.json)
        else:
            return jsonify({'message': 'Old password is incorrect!'})


@app.route('/profile/settings/change_avatar', methods=['PATCH'])
@jwt_required()
def change_avatar():
    return 0