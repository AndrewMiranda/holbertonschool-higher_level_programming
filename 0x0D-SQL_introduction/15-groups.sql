-- lists the number of records with the same score in the table second_table
SELECT score, COUNT(score) AS number FROM holb GROUP BY score ORDER BY `holb`.`score` DESC
