# Front instructions

### `npm install`

## Change in .env.development file

### `REACT_APP_API_URL=` with your backend port

## Available Scripts

In the project directory (/front), you can run:

### `npm start`

Runs the app in the development mode.\

### `npm run build`

Builds the app for production to the `build` folder.\

######################################################################################
######################################################################################

### Backend instructions

### `npm install`

## Create a new database in your MySQL named 'xe_properties'

To populate the 'xe_properties' database, run the following query:

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

## Make a change in /backend/models/db.js. in the `const connection=` line with your MySQL credentials (host, user, password, database)

## Start server

In the project directory,(backend) you can run:

### `node server.js`
