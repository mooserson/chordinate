# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## songs
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null, indexed
user_id         | integer   | not null, indexed
timeStart       | integer   | not null

## rolls
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
notes           | string    | not null
timeslice       | integer   | not null
song_id         | integer   | nut null, indexed
