from flask import Flask
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy

from .config import Config

app = Flask(__name__)
app.config.from_object(Config)

jwt = JWTManager(app)
db = SQLAlchemy(app)

with app.app_context():
    db.create_all()

from src.users.views import register, login
from src.user_profile.views import profile
from src.main.views import index
