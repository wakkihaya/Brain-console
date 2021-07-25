## What is Brain-console
Web application that shows the brainwave data fetched from database by id.

![demo](https://user-images.githubusercontent.com/46864179/126886018-f329c5dd-ec25-4dc9-a01f-4e9e9d1fbecf.gif)


## How it works
![how it works](https://user-images.githubusercontent.com/46864179/126886427-c19ec0ad-249d-4fb2-bbfc-af554e1103cb.jpg)

- Frontend: Next.js
- Backend: Nest.js
- Database: MySQL(Docker), Google Cloud Storage(Docker)

## Run

### 0. Initial setup

Add your own CSV brain data file to the directory `data/sample-bucket/` with the name of `sample-1.csv` ).

<br>

The CSV file should be formated with two columns `time`, `data`.

Example:
```
time,data
0,750.526803
0.005,1185.574054
...
```

### 1. Run virtual database using mysql and google cloud storage in docker.

`docker-compose up -d`

At initial running, initial data with `sample-1.csv` file is supposed to be created in mysql.


### 2. Run web application.

1. For client,
   `cd client && yarn dev` (Access: `http://localhost:3000`)

2. For server,
   `cd server && yarn start` (Access: `http://localhost:3300`)

3. To see playground of graphQL,
   access `http://localhost:3300/graphql`

### 3. Access your brainwave data.
By specifing id on uri, you will get the brainwave data you want.

`http://localhost:3000/{id}`

(`{id}` is compatible with auto-increase `id` in mysql.)
