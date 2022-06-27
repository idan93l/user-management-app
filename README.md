
# User Management

User Management app based on existing data

## Tech Used

ReactJS, NodeJS, Express, MongoDB, Mongoose, MaterialUI, Styled-Components, Axios, React-Router-Dom, HTML, CSS, VanillaJS.
## Screenshots

Home Page - /header

![App Screenshot](https://i.postimg.cc/Dfd2BZQd/Header.png)


Customers Table - /customers

![App Screenshot](https://i.postimg.cc/d1WKc75z/customers.png)


Customer Page - /customer/:id

![App Screenshot](https://i.postimg.cc/RZ0s2PkV/customer.png)


## API Reference

#### Get all users

```http
  GET /users
```


#### Get user

```http
  GET /:id
```

#### Find user and update "isActive" field

```http
  post /:id
```


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run server
```

Start the client

```bash
  npm start
```