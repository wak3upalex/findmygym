from flask import jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from src import app
from src.models import User


@app.route('/profile', methods=['GET'])
@jwt_required()
def profile():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    return jsonify(user.json)
