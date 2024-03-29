// Utilizando o operador $all , retorne todos os filmes que contenham action e adventure no array category .
db.movies.find({category: {$all: ["action", "adventure"]}});
// Agora retorne os filmes que contenham action no array category e possuem nota do IMDB maior do que 7 .
// Adicione um array chamado ratings ao filme Batman com os seguintes valores: [85, 100, 102, 105] . Dica: lembre-se do operador $each visto no dia anterior.
// Adicione um array chamado ratings ao filme Godzilla com os seguintes valores: [78, 52, 95, 102] .
// Adicione um array chamado ratings ao filme Home Alone com os seguintes valores: [200, 99, 65] .
// Retorne todos os filmes com ratings maior do que 103 , exibindo apenas os campos title e ratings .
// Retorne todos os filmes com ratings entre 100 e 105 , exibindo apenas os campos title e ratings .
// Retorne todos os filmes com ratings entre 64 e 105 e divisíveis por 9 , exibindo apenas os campos title e ratings .
// Retorne os filmes da categoria adventure e com ratings maior do que 103 , exibindo apenas os campos title , ratings e category .
// Retorne somente o título de todos os filmes com dois elementos no array category .
// Retorne somente o título de todos os filmes com quatro elementos no array ratings .
// Busque os filmes em que o módulo 5 do campo budget seja 0 e que o array category tenha tamanho 2 .
// Retorne os filmes da categoria "sci-fi" ou que possua o ratings maior do que 199 , exibindo apenas os campos title , ratings e category .
// Retorne os filmes em que o ratings possua tamanho 4 e que seja da category "adventure" ou "family" , mas que não tenha o imdbRating menor que 7.
// Adicione o campo description no filme Batman com o seguinte valor: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker." .
// Adicione o campo description no filme Godzilla com o seguinte valor: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity." .
// Adicione o campo description no filme Home Alone com o seguinte valor: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation." .
// Utilizando o operador $regex , retorne todos os filmes em que a descrição comece com a palavra "The" .
// Utilizando o operador $regex , retorne todos os filmes em que a descrição termine com a palavra "humanity." .
// Crie um índice do tipo text no campo description .
// Utilizando o operador $text , busque por filmes que contenham o termo "vacation" .
// Utilizando o operador $text , busque por filmes que contenham os termos "monstrous" e "criminal" .
// Utilizando o operador $text , busque por filmes que contenham a frase "when he is accidentally" .
