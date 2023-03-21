from flask import render_template, request, jsonify, url_for, redirect, Blueprint
from flask_login import login_user, login_required, logout_user
from sqlalchemy.exc import IntegrityError

from src import db, login_manager
from src.models import User


users = Blueprint('users', __name__)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


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
            login_user(user)
            return redirect(url_for('users.login'))
        except IntegrityError:
            db.session.rollback()
            return jsonify({'error': 'Email address already exists'})
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
            login_user(user)
            return redirect(url_for('user_profile.profile'))
        else:
            return jsonify({'error': 'Invalid email or password'})
    else:
        return render_template('login.html')


@users.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('main.index'))
