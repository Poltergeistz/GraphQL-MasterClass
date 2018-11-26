const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const app = express();

const MyGraphQLSchema = require('./schema');

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true
  }));

const PORT = process.env.PORT || 4000  

app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));