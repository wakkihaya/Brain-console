-- Client: /:id
-- MySQL: Fetch fileName from id -> Client: access brain data from fileName in GCS.

DROP SCHEMA IF EXISTS sample;
CREATE SCHEMA sample;
USE sample;

CREATE TABLE brainwave
(
  id           INT(10),
  fileName     VARCHAR(40)
);

INSERT INTO brainwave (id, fileName) VALUES (1, "sample-1.csv");
