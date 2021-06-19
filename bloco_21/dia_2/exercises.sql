-- Exercício 1
SELECT M.title, B.domestic_sales, B.international_sales FROM Pixar.Movies M
INNER JOIN Pixar.BoxOffice B
ON M.id = B.movie_id;

-- Exercício 2
SELECT M.title, B.domestic_sales, B.international_sales FROM Pixar.Movies M
INNER JOIN Pixar.BoxOffice B
ON M.id = B.movie_id
WHERE B.international_sales > B.domestic_sales;

-- Exercício 3
SELECT M.title, B.rating FROM Pixar.Movies M
INNER JOIN Pixar.BoxOffice B
ON M.id = B.movie_id
ORDER BY B.rating DESC;

-- Exercício 4
SELECT * FROM Pixar.Theater T
LEFT JOIN Pixar.Movies M
ON T.id = M.theater_id
ORDER BY T.`name`;

-- Exercício 5
SELECT * FROM Pixar.Theater T
RIGHT JOIN Pixar.Movies M
ON M.theater_id = T.id
ORDER BY T.name ASC;

-- Exercício 6
SELECT M.title FROM Pixar.Movies M
WHERE id IN (
	SELECT B.movie_id FROM Pixar.BoxOffice B
	WHERE B.rating > 7.5
);

SELECT M.title FROM Pixar.Movies M
INNER JOIN Pixar.BoxOffice B
ON M.id = B.movie_id
WHERE B.rating > 7.5;

-- Exercício 7
SELECT B.rating FROM Pixar.BoxOffice B
WHERE B.movie_id IN (
	SELECT M.id FROM Pixar.Movies M
    WHERE M.year > 2009
);

SELECT B.rating FROM Pixar.BoxOffice B
INNER JOIN Pixar.Movies M
ON B.movie_id = M.id
WHERE M.year > 2009;

-- Exercício 8
SELECT T.`name`, T.location FROM Pixar.Theater T
WHERE EXISTS (
	SELECT * FROM Pixar.Movies M
    WHERE M.theater_id = T.id
);

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8.
-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.
-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.


