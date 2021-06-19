-- SELECT
-- Exemplos
SELECT 'Olá, bem-vindo ao SQL!';
SELECT 10;
SELECT now();
SELECT 20 * 2;
SELECT 50 / 2;
SELECT 18 AS idade;
SELECT 2019 AS ano;
SELECT 'Rafael', 'Martins', 25, 'Desenvolvedor Web';
SELECT 'Rafael' AS Nome, 'Martins' AS Sobrenome, 25 AS Idade, 'Desenvolvedor Web' AS 'Área de atuação';

-- Exercícios de compreensão 
SELECT 'nome' as Nome, 'sobrenome' AS Sobrnome, 'cidade natal' AS 'Cidade Natal', 'idade' AS Idade;
SELECT now() AS 'Data Atual';

-- Exercícios de compreensão - tabela sakila
SELECT * FROM sakila.city;
SELECT first_name, last_name FROM sakila.customer;
SELECT * FROM sakila.rental;
SELECT title, description, release_year FROM sakila.film;

-- CONCAT
-- Exemplos
SELECT CONCAT(first_name, last_name) FROM sakila.actor;
SELECT CONCAT(first_name, ' ', last_name) FROM sakila.actor;
SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM sakila.actor;

-- Exercícios de compreensão
SELECT CONCAT(title, ' - ', release_year) AS 'Lançamento do Filme' FROM sakila.film;
SELECT CONCAT(title, ' -> ', rating) AS Classificação FROM sakila.film;
SELECT CONCAT(address, ' - ', district) AS Endereço FROM sakila.address;

-- DISTINCT
-- Exercícios de compreensão
SELECT DISTINCT Nome, Idade FROM Escola.Alunos; -- 5 Linhas
SELECT DISTINCT Nome FROM Escola.Alunos; -- 4 linhas
SELECT DISTINCT Idade FROM Escola.Alunos; -- 4 linhas

-- COUNT
-- Exercícios de compreensão
SELECT COUNT(password) FROM sakila.staff;
SELECT COUNT(first_name) FROM sakila.staff;
SELECT COUNT(email) FROM sakila.staff;

-- LIMIT
SELECT COUNT(*) FROM sakila.rental;
SELECT * FROM sakila.rental LIMIT 10;

-- LIMIT OFFSET
SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;

-- ORDER BY
SELECT * FROM sakila.actor ORDER BY first_name;

-- Exercícios 'Montar o bolo'
SELECT * FROM sakila.film;
SELECT title, release_year, rating FROM sakila.film;
SELECT DISTINCT last_name FROM sakila.actor;
SELECT COUNT(*) FROM sakila.film;
SELECT COUNT(*) FROM sakila.customer;
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
SELECT COUNT(*) FROM sakila.category;
SELECT COUNT(*) FROM sakila.country;
SELECT * FROM sakila.language LIMIT 5 OFFSET 1;
SELECT title, release_year, length, rating, replacement_cost
FROM sakila.film
ORDER BY length DESC, replacement_cost LIMIT 20;
    
-- Exercícios do Dia
SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1, 2, 3;
SELECT 10 + 15;
SELECT (10 + 15) * 10;
SELECT * FROM Scientists.Scientists;
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;
SELECT Name FROM Scientists.Scientists ORDER BY Name;
SELECT Name FROM Scientists.Projects ORDER BY Name DESC;
SELECT CONCAT('O Projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído') FROM Scientists.Projects;
SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;
SELECT DISTINCT Project FROM Scientists.AssignedTo;
SELECT Name FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;
SELECT Name FROM Scientists.Projects ORDER BY Hours LIMIT 1 OFFSET 1;
SELECT * FROM Scientists.Projects ORDER BY Hours LIMIT 5;
SELECT CONCAT('Existem ', COUNT(*), ' cientistas na tablea Scientists.') FROM Scientists.Scientists;

-- Exercícios Bônus
SELECT * FROM PiecesProviders.Providers ORDER BY Name DESC LIMIT 1;
SELECT * FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 5;
SELECT * FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 4 OFFSET 3;
SELECT
	CONCAT('A peça mais cara é a: ', Piece, ', provida pela empresa ', Provider, ' e custa ', Price, ' reais.')
FROM PiecesProviders.Provides
ORDER BY Price DESC
LIMIT 1;