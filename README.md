Web application that shows real-time brainwave data from database.
## Run
1. Run virtual database using mysql and google cloud storage in docker.

`docker-compose up -d`

At initial running, initial data with `sample-meg.fif` file is supposed to be created in mysql.

2. Run web application

`yarn start`

## Tech stack
- Frontend: Next.js
- Backend: Nest.js
- Database: MySQL(Docker), Google Cloud Storage(Docker)
