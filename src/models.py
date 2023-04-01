from datetime import datetime

from flask_jwt_extended import create_access_token
from werkzeug.security import check_password_hash, generate_password_hash

from src import db


class User(db.Model):
    __tablename__ = 'allUsers'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(20))
    last_name = db.Column(db.String(30))
    info = db.Column(db.Text)
    phone = db.Column(db.String(12))
    email = db.Column(db.String(60))
    password = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, first_name, last_name, phone, email, info, password):
        self.first_name = first_name
        self.last_name = last_name
        self.info = info
        self.phone = phone
        self.email = email
        self.password = generate_password_hash(password)

    def __repr__(self):
        return f"<User(email='{self.id}')>"

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def generate_access_token(self):
        return create_access_token(identity=self.id)

    @property
    def json(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'info': self.info,
            'phone': self.phone,
            'email': self.email,
            'created_at': self.created_at.isoformat()
        }


class Coach(db.Model):
    __tablename__ = "coaches"
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String())
    last_name = db.Column(db.String())
    rewards = db.Column(db.Text)
    phone = db.Column(db.String(12), unique=True, nullable=False)
    email = db.Column(db.String(60), unique=True, nullable=False)
    password = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, first_name, last_name, rewards, phone, email, password):
        self.first_name = first_name
        self.last_name = last_name
        self.rewards = rewards
        self.phone = phone
        self.email = email
        self.password = generate_password_hash(password)

    def __repr__(self):
        return f"<Coach(email='{self.email}'>"

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def generate_access_token(self):
        return create_access_token(identity=self.id)

    @property
    def json(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'rewards': self.rewards,
            'phone': self.phone,
            'email': self.email,
            'created_at': self.created_at.isoformat()
        }


class Place(db.Model):
    __tablename__ = "places"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    info = db.Column(db.Text)
    location = db.Column(db.Text)

    def __repr__(self):
        return f"<Place(name='{self.name}', loc='{self.location}'>"

    @property
    def json(self):
        return {
            'id': self.id,
            'info': self.info,
            'location': self.location
        }

