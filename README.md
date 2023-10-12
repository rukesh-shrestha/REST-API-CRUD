
# REST-API-CRUD
Rest API developed using Node js to implement the CRUD for the product. This is the second part (implementation of medium article). 

Detail description of this codebase can also be found in medium article. 

### Feature
**CRUD for the product**
- Create the new product
- Read the particular product and also all product
- Update the particular product
- Delete the particular product





## Run Locally

Clone the project

```
git clone git@github.com:rukesh-shrestha/REST-API-CRUD.git
```
or
```
git clone https://github.com/rukesh-shrestha/REST-API-CRUD.git
```

Go to the project directory

```bash
  cd REST-API-CRUD
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Before starting the serving add the below mention environmental variables. 


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DATABASE_CONNECTION_STRING`


After adding the above mention variables. Now you can start the server. 


```
npm run dev

```

## API Reference
### API Documentation from Swagger
#### /api-docs `GET` 

**Description**
Get the Swagger API Documentation Page.

### Product
### Add New Product
#### /api/products `POST`
**Description**
Add new product in the database

*Required*

| Request Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name` | `string` | **Required**. Product Name |
| `brand` | `string` | **Required**. Product Brand |
| `description` | `string` | **Required**. Product Description|
| `price` | `number` | **Required**. Product Price  |
| `image` | `string` | **Optional**, **Default** Product image link [300*200] |



Response `SUCCESS`
- Newly created product data `200 - success`

Response `ERROR`
- Missing Required Field - `400 - Bad Request`
- Product Already Exist -   `401 - Unauthorized`


#### /api/products `GET`
**Description**
Get all Products 

*Required*

Response `SUCCESS`
- All the products with total data length and product data `200 - success`



### Get Particular Product
#### /api/products/{id} `GET`
**Description**
Get one particular product 

*Required*
`Params` - Product ObjectID


Response `SUCCESS`
- Particular Product Data `200 - success`

Response `ERROR`
- Product Not Found - `404 - Bad Request`


### Update Particular Product
#### /api/products/{id} `PATCH`
**Description**
Update the Particular Product

*Required*
`Params` - Product ObjectID

| Request Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name` | `string` | **Required**. Product Name |
| `brand` | `string` | **Required**. Product Brand |
| `description` | `string` | **Required**. Product Description|
| `price` | `number` | **Required**. Product Price  |
| `image` | `string` | **Optional**, **Default** Product image link [300*200] |


Response `SUCCESS`
- Update Particular Product Data `200 - success`

Response `ERROR`
- Product Not Found - `404 - Bad Request`
- Empty JSON Body `400 - Bad Request`




### Delete Particular Product
#### /api/products/{id} `DELETE`
**Description**
DELETE the Particular Product 

*Required*
`Params` - Product ObjectID


Response `SUCCESS`
- DELETE successful `200 - success`

Response `ERROR`
- Product Not Found - `404 - Bad Request`

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@Rukesh Shrestha](https://shrestharukesh.com.np)
