from flask import Flask
from flask_jwt_extended import JWTManager
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SECRET_KEY'] = 'ac49753c75984a1ca5eb52d64d40c1e2'
app.config['JWT_SECRET_KEY'] = 'a4d3c68acac545b091ef4f2f57837458'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:asdf@localhost/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

jwt = JWTManager(app)
login_manager = LoginManager(app)
db = SQLAlchemy(app)


with app.app_context():
    db.create_all()


from .main.views import main
from .user_profile.views import user_profile
from .users.views import users

app.register_blueprint(main)
app.register_blueprint(user_profile)
app.register_blueprint(users)
