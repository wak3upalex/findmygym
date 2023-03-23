from datetime import datetime

from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash, check_password_hash

from src import db, jwt


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    phone = db.Column(db.Text)
    email = db.Column(db.Text, unique=True)
    password = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, first_name, last_name, phone, email, password):
        self.first_name = first_name
        self.last_name = last_name
        self.phone = phone
        self.email = email
        self.password = generate_password_hash(password)

    def __repr__(self):
        return f"<User(email='{self.email}')>"

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def generate_access_token(self):
        return create_access_token(identity=self.id)

    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'phone': self.phone,
            'email': self.email,
            'created_at': self.created_at.isoformat()
        }

    @staticmethod
    @jwt.user_identity_loader
    def user_identity_lookup(user_id):
        return user_id

    @staticmethod
    @jwt.user_lookup_loader
    def user_loader_callback(identity):
        return User.query.get(identity)
