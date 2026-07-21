CREATE TABLE animal(
    id SERIAL PRYMARY KEY,
    name VARCHAR(30) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    idade INT,
    status_saude VARCHAR(50) DEFAULT 'Saudável',
);


INSERT INTO animal (nome, especie, idade, status_saude) 
VALUES 
    ('Luna', 'Gato', 2, 'Saudável'),
    ('Thor', 'Cão', 5, 'Em Tratamento'),
    ('Mel', 'Cão', 1, 'Saudável'),
    ('Pipoca', 'Hamster', 1, 'Saudável'),
    ('Fred', 'Papagaio', 12, 'Em Observação'),
    ('Simba', 'Gato', 3, 'Saudável'),
    ('Max', 'Cão', 7, 'Em Tratamento'),
    ('Nina', 'Coelho', 2, 'Saudável'),
    ('Chico', 'Calopsita', 4, 'Saudável'),
    ('Zeus', 'Cão', 6, 'Em Recuperação');


SELECT * FROM animal ORDER BY id;