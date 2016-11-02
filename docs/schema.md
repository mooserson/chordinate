# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
guest           | boolean   | not null, default: false

## songs
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null, indexed
user_id         | integer   | not null, indexed
timeStart       | integer   | not null

## plays
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
song_id         | integer   | not null, indexed
user_id         | integer   | not null, indexed
date            | integer   | not null

## likes
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
song_id         | integer    | not null, indexed
user_id         | integer   | not null, indexed

## slices
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
notes           | string    | not null
timeslice       | integer   | not null
song_id         | integer   | nut null, indexed
