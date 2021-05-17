CREATE DATABASE uplift;

CREATE TABLE businesses (
    id SERIAL PRIMARY KEY,
    name TEXT,
    bType TEXT,
    city TEXT,
    state TEXT,
    zipCode INTEGER,
    country TEXT,
    lift BOOLEAN,
    liftType TEXT,
    updated TIMESTAMP,
    elevator BOOLEAN,
    valet BOOLEAN,
    publicTransit BOOLEAN
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    
)