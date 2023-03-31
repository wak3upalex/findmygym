from datetime import datetime

from flask_jwt_extended import create_access_token
from werkzeug.security import check_password_hash, generate_password_hash

from src import db


class User(db.Model):
    __tablename__ = 'allUsers'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    phone = db.Column(db.Text)
    email = db.Column(db.Text)
    occupation = db.Column(db.Text)
    password = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, first_name, last_name, phone, email, occupation, password):
        self.first_name = first_name
        self.last_name = last_name
        self.phone = phone
        self.email = email
        self.occupation = occupation
        self.password = generate_password_hash(password)

    def __repr__(self):
        return f"<User(email='{self.id}')>"

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
            'occupation': self.occupation,
            'created_at': self.created_at.isoformat()
        }
