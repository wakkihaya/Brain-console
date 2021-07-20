Web application that shows real-time brainwave data from database.
## Run
### 1. Run virtual database using mysql and google cloud storage in docker.

`docker-compose up -d`

At initial running, initial data with `sample-meg.fif` file is supposed to be created in mysql.

### 2. Run web application
1. For client,
`cd client && yarn dev` (Access: `http://localhost:3000`)

2. For server,
`cd server && yarn start` (Access: `http://localhost:3300`)

3. To see playground of graphQL,
access `http://localhost:3300/graphql`
## Tech stack
- Frontend: Next.js
- Backend: Nest.js
- Database: MySQL(Docker), Google Cloud Storage(Docker)
