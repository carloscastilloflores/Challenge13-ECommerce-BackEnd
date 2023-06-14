# Challenge13-ECommerce-BackEnd
## Link of Video Demonstration
https://drive.google.com/file/d/1S4ErJ0WDB2EWNFhGRdlZcIZBEWlxoeCj/view?usp=share_link

## Description
This project provides a functional Express.js API that interacts with a MySQL database using Sequelize. It allows users to perform CRUD operations (Create, Read, Update, Delete) on categories, products, and tags.

## User Story 
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Installation 
Navigate to the project directory.
Install the dependencies by running the following command:
```
npm install
```
Create an environment variable file (.env) in the root directory of the project.
Add the following environment variables to the .env file:

```
DB_NAME=your_database_name
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
```
Replace "your_database_name", "your_mysql_username", and "your_mysql_password" with your own database credentials.
Run the database schema and seed commands to create a development database and seed it with test data:

```
npm run schema
npm run seed
```
## Usage 
1. Start the application by running the following command:
```
npm start
````
2. Once the server is started and the Sequelize models are synced to the MySQL database, you can use an API testing tool like Insomnia Core to interact with the API.

3. Use the following routes in Insomnia Core to perform CRUD operations:
- GET routes:
    - Categories: /api/categories
    - Products: /api/products
    - Tags: /api/tags
- POST routes:
    - Create a new category: /api/categories
    - Create a new product: /api/products
    - Create a new tag: /api/tags
- PUT routes:
    - Update a category: /api/categories/:id
    - Update a product: /api/products/:id
    - Update a tag: /api/tags/:id
- DELETE routes:
    - Delete a category: /api/categories/:id
    - Delete a product: /api/products/:id
    - Delete a tag: /api/tags/:id

4. Send requests to the above routes in Insomnia Core to perform the desired operations on the database.