from flask import render_template, Blueprint
from flask_jwt_extended import jwt_required, get_jwt_identity

from src.models import User


user_profile = Blueprint('user_profile', __name__)


@user_profile.route('/profile')
@jwt_required()
def profile():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    return render_template('profile.html', user=user)

