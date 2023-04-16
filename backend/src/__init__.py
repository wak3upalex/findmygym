from flask import Flask
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

from .config import Config

app = Flask(__name__)
app.config.from_object(Config)

jwt = JWTManager(app)
db = SQLAlchemy(app)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
migrate = Migrate(app, db)

from .models import User, Coach, Place
with app.app_context():
    db.create_all()

from src.main.views import index
from src.settings.data_edit import change_data, change_avatar, change_password
from src.user_profile.views import profile
from src.users.views import register, login
