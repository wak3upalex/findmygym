FROM python:3.9-slim-buster

WORKDIR /app

COPY requirements.txt /app
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install python-dotenv
RUN pip install SQLAlchemy

COPY . /app

CMD [ "python", "manage.py" ]