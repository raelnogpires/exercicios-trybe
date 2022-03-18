-- Encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT
	movies.title, sales.domestic_sales, sales.international_sales
FROM Pixar.BoxOffice AS sales
INNER JOIN Pixar.Movies AS movies
ON sales.movie_id = movies.id;

-- Faça uma busca que retorne o número de vendas para cada filme que possui
-- um número maior de vendas internacionais (international_sales)do que vendas nacionais (domestic_sales).
SELECT
	movies.title, sales.domestic_sales, sales.international_sales
FROM Pixar.BoxOffice AS sales
INNER JOIN Pixar.Movies AS movies
ON sales.movie_id = movies.id
WHERE sales.international_sales > sales.domestic_sales;

-- Faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT
	movies.title, bxofc.rating
FROM Pixar.BoxOffice AS bxofc
INNER JOIN Pixar.Movies AS movies
ORDER BY bxofc.rating DESC;

-- Faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e,
-- adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas.
-- Retorne os nomes dos cinemas em ordem alfabética.
SELECT
	t.name, t.location,
    m.title, m.director, m.year, m.length_minutes
FROM Pixar.Theater AS t
LEFT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

-- Faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e,
-- adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz.
-- Retorne os nomes dos cinemas em ordem alfabética.
SELECT
	t.id, t.name, t.location,
	m.title, m.director, m.year, m.length_minutes
FROM Pixar.Theater AS t
RIGHT JOIN Pixar.Movies AS m
ON m.theater_id = t.id
ORDER BY t.name;
