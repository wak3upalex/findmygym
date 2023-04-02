from flask import jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from src import app
from src.models import User, Coach


@app.route('/profile', methods=['GET'])
@jwt_required()
def profile():
    some_id = get_jwt_identity()
    user = User.query.get(some_id)
    if user:
        return jsonify(user.json)
    else:
        coach = Coach.query.get(some_id)
        return jsonify(coach.json)
