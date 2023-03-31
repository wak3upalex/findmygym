from flask import Blueprint, jsonify

from src import app


@app.route('/', methods=['GET'])
def index():
    return jsonify({'message': 'main page'})
