import os
from flask.cli import load_dotenv


load_dotenv()


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY')
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY')
    JWT_ACCESS_TOKEN_EXPIRES = False
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:asdf@localhost/postgres'  # http://127.0.0.1:5000
    SQLALCHEMY_TRACK_MODIFICATIONS = False
