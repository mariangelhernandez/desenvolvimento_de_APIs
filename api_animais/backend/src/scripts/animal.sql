CREATE TABLE animal(
    id SERIAL PRYMARY KEY,
    name VARCHAR(30) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    idade INT,
    status_saude VARCHAR(50) DEFAULT 'Saudável',
);