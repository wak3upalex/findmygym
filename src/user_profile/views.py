from flask import render_template, Blueprint
from flask_login import login_required, current_user


user_profile = Blueprint('user_profile', __name__)


@user_profile.route('/profile')
@login_required
def profile():
    return render_template('profile.html', user=current_user)
