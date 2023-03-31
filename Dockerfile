FROM python:3.9-slim-buster

RUN apt-get update && \
    apt-get install -y postgresql-client && \
    apt-get clean

WORKDIR /app

COPY requirements.txt /app
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install python-dotenv

COPY . /app

ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=asdf
ENV POSTGRES_DB=_db_fmg
ENV POSTGRES_HOST=5432

CMD [ "python", "manage.py" ]