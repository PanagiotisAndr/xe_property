# For front instractios

### `npm install`

## Change on .env.development

### `REACT_APP_API_URL=` with your backend port

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

### `npm run build`

Builds the app for production to the `build` folder.\

######################################################################################
######################################################################################
######################################################################################
######################################################################################

# For backend instractios

### `npm install`

## Create in your mysql new database with name( xe_properties )

and insert in this database ( xe_properties ) run this query

CREATE TABLE `properties` (
`title` varchar(155) NOT NULL,
`placeId` text NOT NULL,
`propertyType` text NOT NULL,
`area` text NOT NULL,
`price` int(11) NOT NULL,
`levels` int(11) NOT NULL,
`bathrooms` int(11) NOT NULL,
`description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
COMMIT;

## Change on /backend/models/db.js

### the `const connection=` with your mysql (host, user, password, database)

## Start server

In the project directory,(backend) you can run:

### `node server.js`
