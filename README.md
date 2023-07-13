# OKR-SQL

per far funzionare il progetto bisogna creare uno schema chiamato "sql-test"
nello schema ci dovrá essere una tabella chaiamata "products" che ha:

id: INT, UNIQUE, NOT NULLABLE, PRIMARY KEY, NON NEGATIVE
title: VARCHAR(255), NOT NULLABLE
description: TEXT, NOT NULLABLE
imageurl: VARCHAR(255), NOT NULLABLE
price: DOUBLE, NOT NULLABLE
