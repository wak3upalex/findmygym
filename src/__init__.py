from flask import Flask
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy

from .config import Config

app = Flask(__name__)
# app.config.from_object(Config)
app.config['SECRET_KEY'] = 'ba57af1c9a3db8b3c03e001c270dfce5'
app.config['JWT_SECRET_KEY'] = '9232f7ebb9487add64be849a2abeb0d4'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@db/gym_db'  # Config.SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

jwt = JWTManager(app)
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from .models import User, Coach, Place
with app.app_context():
    db.create_all()

from src.main.views import index
from src.settings.data_edit import change_data, change_avatar, change_password
from src.user_profile.views import profile
from src.users.views import register, login
