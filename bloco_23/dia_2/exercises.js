/*
Após fazer o download do arquivo, importe-o para o MongoDB através da ferramenta mongoimport . No seu terminal, utilize o seguinte comando (lembre-se de substituir <caminho do arquivo> pelo caminho do arquivo na sua máquina):

mongoimport --db class --collection superheroes <caminho_do_arquivo>
Pronto! Você já tem uma base de dados com 734 super-heróis. Para conferir, conecte-se à instância do seu banco de dados utilizando o Mongo Shell e execute os seguintes comandos:

use class;

db.superheroes.count();
Os documentos têm a seguinte estrutura:

{
    "_id" : ObjectId("5e4ed2b2866be74b5b26ebf1"),
    "name" : "Abin Sur",
    "alignment" : "good",
    "gender" : "Male",
    "race" : "Ungaran",
    "aspects" : {
        "eyeColor" : "blue",
        "hairColor" : "No Hair",
        "skinColor" : "red",
        "height" : 185,
        "weight" : 40.82
    },
    "publisher" : "DC Comics"
}

Exercícios
O MongoDB possui diversas ferramentas. Por exemplo, o mongo , o mongosh , o Compass e outras ferramentas de terceiros. Você pode utilizar aquela que achar melhor para executar as consultas ( queries ), o importante é realizá-las.
Exercício 1: Inspecione um documento para que você se familiarize com a estrutura. Entenda os atributos e os níveis existentes.
Exercício 2: Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está em centímetros.
Exercício 3: Retorne o total de super-heróis menores que 1.80m.
Exercício 4: Retorne o total de super-heróis com até 1.80m.
Exercício 5: Selecione um super-herói com 2.00m ou mais de altura.
Exercício 6: Retorne o total de super-heróis com 2.00m ou mais.
Exercício 7: Selecione todos os super-heróis que têm olhos verdes.
Exercício 8: Retorne o total de super-heróis com olhos azuis.
Exercício 9: Utilizando o operador $in , selecione todos os super-heróis com cabelos pretos ou carecas ( "No Hair" ).
Exercício 10: Retorne o total de super-heróis com cabelos pretos ou carecas ( "No Hair" ).
Exercício 11: Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.
Exercício 12: Utilizando o operador $not , retorne o total de super-heróis que não tenham mais de 1.80m de altura.
Exercício 13: Selecione todos os super-heróis que não sejam humanos ou que não sejam maiores do que 1.80m .
Exercício 14: Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics .
Exercício 15: Selecione todos os super-heróis que pesem entre 80kg e 100kg , sejam Humanos ou Mutantes e não sejam publicados pela DC Comics .
Exercício 16: Retorne o total de documentos que não contêm o campo race .
Exercício 17: Retorne o total de documentos que contêm o campo hairColor .
Exercício 18: Remova apenas um documento publicado pela Sony Pictures .
Exercício 19: Remova todos os documentos publicados pelo George Lucas .
*/
