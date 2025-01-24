
# Swagger API Example

This is a simple API example using Express and Swagger for API documentation. The API provides basic CRUD operations for managing items.

## Project Structure

```
.
├── .gitignore
├── package.json
├── server.js
└── swagger.yaml

```

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd swagger
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Server

To start the server, run the following command:
```sh
node server.js
```
The server will start on port 3000.

### API Endpoints

- **GET /items**: Retrieve all items
- **POST /items**: Create a new item
- **PUT /items/:id**: Update an item by ID
- **DELETE /items/:id**: Delete an item by ID

### Swagger UI

Swagger is used to generate interactive API documentation. The API documentation is available at:
```
http://localhost:3000/api-docs
```

#### Swagger Configuration

The Swagger configuration is defined in the `swagger.yaml` file. Here is a brief overview of the configuration:

- **openapi**: Specifies the OpenAPI version (3.0.0).
- **info**: Provides metadata about the API, such as the title, description, and version.
- **paths**: Defines the available API endpoints and their operations (GET, POST, PUT, DELETE).

Each path includes:
- **summary**: A brief description of the operation.
- **parameters**: Parameters required for the operation (e.g., path parameters).
- **requestBody**: The expected request body for POST and PUT operations.
- **responses**: Possible responses from the API, including status codes and response schemas.
  
  
#### Example of Swagger Path Configuration

```yaml
paths:
  /items:
    get:
      summary: Get all items
      responses:
        200:
          description: A list of items
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    id: 
                      type: integer
                    name:
                      type: string
    post:
      summary: Create a new item
      requestBody:
        required: true
        content:
          application/json:
            schema: 
              type: object
              properties:
                name: 
                  type: string
                  example: Example Item
      responses:
        201:
          description: Created Item
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: integer
                  name:
                    type: string
```

This configuration defines the `/items` endpoint with GET and POST operations. The GET operation retrieves all items, and the POST operation creates a new item.

## Dependencies

- [express](https://www.npmjs.com/package/express)
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
- [yamljs](https://www.npmjs.com/package/yamljs)

## License

This project is licensed under the ISC License.















