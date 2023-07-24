# OKR-SQL

### Schema and table
to make the project work you have to create a schema called "sql-test" in the schema there should be a table called "products" below the code:

```
CREATE TABLE products (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  imageurl VARCHAR(255) NOT NULL,
  price DOUBLE NOT NULL,
  PRIMARY KEY (id)
);

```
### Starting the project:

```
git clone git@github.com:Heeysimonee/OKR-SQL.git
```

```
npm install
```

### Setup the project

within databasa.js replace username and password with the credentials used by the user
