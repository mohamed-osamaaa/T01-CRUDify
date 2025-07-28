# Task 1: REST API for CRUD Operations on a Book

## Description

This project is a simple RESTful API built using **NestJS** with **TypeScript**, **MySQL** as the database, and **TypeORM** for object-relational mapping. It allows users to perform CRUD (Create, Read, Update, Delete) operations on a book entity.

## Technologies Used

* NestJS
* TypeScript
* MySQL
* TypeORM
* class-validator (for input validation)
* class-transformer (for data transformation)

## Features

* Create a new book
* Retrieve all books
* Retrieve a specific book by ID
* Update a specific book by ID
* Delete a specific book by ID

## API Endpoints

### Create a new book

**POST** `/books`

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedDate": "1925-04-10"
}
```

### Retrieve all books

**GET** `/books`

### Retrieve a specific book by ID

**GET** `/books/:id`

### Update a specific book by ID

**PUT** `/books/:id`

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedDate": "1925-04-10"
}
```

### Delete a specific book by ID

**DELETE** `/books/:id`

## Setup Instructions

1. **Clone the repository**

```bash
$ git clone https://github.com/mohamed-osamaaa/T01-CRUDify
$ cd T01-CRUDify
```

2. **Install dependencies**

```bash
$ npm install
```

3. **Configure environment variables**
   Create a `.env` file and add your database credentials:

```env
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=Book

PORT=
```

4. **Run the application**

```bash
$ npm run start:dev
```

5. **Run migrations**

```bash
$ npm run typeorm migration:run
```

## Project Structure

```
src/
├── books/
│   ├── books.controller.ts
│   ├── books.service.ts
│   ├── books.module.ts
│   ├── dto/
│   │   ├── create-book.dto.ts
│   │   └── update-book.dto.ts
│   └── entities/
│       └── book.entity.ts
├── app.module.ts
```

## License

This project is licensed under the MIT License.

---

**Note:** Ensure MySQL is running and properly configured before starting the app.
