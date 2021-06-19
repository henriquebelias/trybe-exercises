-- Manipulação de strings
SELECT UCASE('trybe');
SELECT REPLACE('Você já ouviu falar do DuckDuckGo', 'DuckDuckGo', 'Google');
SELECT LENGTH('uma frase qualquer');
SELECT SUBSTRING('A linguagem Javascript está entre as mais usadas', 13, 10);
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

-- Condicionais
SELECT first_name, IF(active, 'Cliente Ativo', 'Cliente Inativo') AS status FROM sakila.customer;
SELECT first_name, email, 
	CASE email
		WHEN 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
	END AS valor
FROM sakila.customer;

SELECT film_id, title, 
	IF(title = 'ACE GOLDFINGER', 'Já assisti esse filme', 'Não conheço o filme') AS 'conheço o filme?'
FROM sakila.film;
SELECT title, rating, 
	CASE rating
		WHEN 'G' THEN 'Livre para todos'
        WHEN 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de 18 anos'
	END AS 'público-alvo'
FROM sakila.film;

-- Funções matemáticas
SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;
SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';
SELECT 220 DIV 12;
SELECT 220 MOD 12;

SELECT ROUND(10.4925);
SELECT ROUND(10.5136);
SELECT ROUND(-10.5136);
SELECT ROUND(10.4925, 2);
SELECT ROUND(10.4925, 3);

SELECT CEIL(10.51);
SELECT CEIL(10.49);
SELECT CEIL(10.2);

SELECT FLOOR(10.51);
SELECT FLOOR(10.49);
SELECT FLOOR(10.2);

SELECT POW(2, 2);
SELECT POW(2, 4);

SELECT SQRT(9);
SELECT SQRT(16);

SELECT RAND();

SELECT ROUND(15 + (RAND() * 5));
SELECT ROUND(15.75, 5);
SELECT FLOOR(39.494);
SELECT CEIL(85.234);

-- Trabalhando com datas
SELECT CURRENT_DATE();
SELECT NOW();
SELECT DATEDIFF(CURRENT_DATE(), '2020-01-01');
SELECT TIMEDIFF('08:00:00', '09:00:00');
SELECT DATE(NOW());
SELECT YEAR(NOW());
SELECT MONTH(NOW());
SELECT DAY(NOW());
SELECT HOUR(NOW());
SELECT MINUTE(NOW());
SELECT SECOND(NOW());

SELECT DATEDIFF('2030-01-20', CURRENT_DATE());
SELECT TIMEDIFF('10:25:45', '11:00:00');

-- Funções de agregação
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registros encontrados (Quantidade)

SELECT AVG(length) AS 'Média de Duração' FROM sakila.film;
SELECT MIN(length) AS 'Duração Mínima' FROM sakila.film;
SELECT MAX(length) AS 'Duração Máxima' FROM sakila.film;
SELECT SUM(length) AS 'Tempo de Exibição Total' FROM sakila.film;
SELECT COUNT(*) AS 'Filmes Registrados' FROM sakila.film;

-- Agrupando dados
SELECT first_name FROM sakila.actor GROUP BY first_name;
SELECT first_name, COUNT(*) FROM sakila.actor GROUP BY first_name;
SELECT rating, AVG(length) FROM sakila.film GROUP BY rating;
SELECT rating, MIN(replacement_cost) FROM sakila.film GROUP BY rating;
SELECT rating, MAX(replacement_cost) FROM sakila.film GROUP BY rating;
SELECT rating, SUM(replacement_cost) FROM sakila.film GROUP by rating;

SELECT `active`, COUNT(*) FROM sakila.customer GROUP BY `active`;
SELECT store_id, `active`, COUNT(*) FROM sakila.customer GROUP BY store_id, `active`;
SELECT rating, AVG(length) AS avg_length FROM sakila.film GROUP BY rating ORDER BY avg_length DESC;
SELECT district, COUNT(*) FROM sakila.address GROUP BY district ORDER BY COUNT(*) DESC;

SELECT first_name, COUNT(*) AS nomes_cadastrados FROM sakila.actor
GROUP BY first_name HAVING nomes_cadastrados > 2;

SELECT rating, AVG(length) AS avg_length FROM sakila.film
GROUP BY rating HAVING avg_length BETWEEN 115.0 AND 121.50 ORDER BY avg_length DESC;
SELECT rating, SUM(replacement_cost) as replacement_cost_total FROM sakila.film
GROUP BY rating HAVING replacement_cost_total > 3950.50 ORDER BY replacement_cost_total;

-- Exercícios
SELECT * FROM hr.employees;
-- 1
SELECT MAX(salary) from hr.employees;
-- 2
SELECT MAX(salary) - MIN(salary) from hr.employees;
-- 3
SELECT job_id, AVG(salary) AS avg_salary
FROM hr.employees GROUP BY job_id ORDER BY avg_salary DESC;
-- 4
SELECT SUM(salary) FROM hr.employees;
-- 5
SELECT
	ROUND(MAX(salary), 2), ROUND(MIN(salary), 2), ROUND(SUM(salary), 2), ROUND(AVG(salary), 2)
FROM hr.employees;
-- 6
SELECT job_id, COUNT(*) FROM hr.employees GROUP BY job_id HAVING job_id = 'IT_PROG';
-- 7
SELECT job_id, SUM(salary) FROM hr.employees GROUP BY job_id;
-- 8
SELECT job_id, SUM(salary) FROM hr.employees GROUP BY job_id HAVING job_id = 'IT_PROG';
-- 9
SELECT job_id, AVG(salary) AS avg_salary FROM hr.employees
GROUP BY job_id HAVING job_id <> 'IT_PROG' ORDER BY avg_salary DESC;
-- 10
SELECT department_id, AVG(salary), COUNT(*) AS employees
FROM hr.employees GROUP BY department_id HAVING employees > 10;
-- 11
SELECT REPLACE(phone_number, 515, 777) FROM hr.employees;
-- 12
SELECT * FROM hr.employees WHERE LENGTH(first_name) >= 8;
-- 13
SELECT employee_id, first_name, YEAR(hire_date) FROM hr.employees;
-- 14
SELECT employee_id, first_name, DAY(hire_date) FROM hr.employees;
-- 15
SELECT employee_id, first_name, MONTH(hire_date) FROM hr.employees;
-- 16
SELECT UCASE(first_name), UCASE(last_name) FROM hr.employees;
-- 17
SELECT last_name, hire_date FROM hr.employees WHERE MONTH(hire_date) = 7 AND YEAR(hire_date) = 1987;
-- 18
SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) FROM hr.employees;
