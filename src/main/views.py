from flask import jsonify

from src import app


@app.route('/', methods=['GET'])
def index():
    return jsonify({'message': 'main page'})
