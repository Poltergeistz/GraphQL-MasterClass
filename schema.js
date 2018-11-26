const axios = require('axios');
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema, GraphQLInt, GraphQLBoolean } = require('graphql');

// Setting up headers (Some App request this)
const config = {
    headers: {'User-Agent': 'Master-Class-GraphQL'}
  };

/* Verify if my account has been pwned*/
// https://haveibeenpwned.com/api/v2/breachedaccount/{account}

/* Getting all breached sites in the system */
// https://haveibeenpwned.com/api/v2/breaches

/* Getting a single breached site */
// https://haveibeenpwned.com/api/v2/breaches/{name}

/* DataClasses */
// https://haveibeenpwned.com/api/v2/dataclasses

// allBreaches Type
const allBreachesType = new GraphQLObjectType({
    name: 'allBreaches',
    fields: () => ({
        Name: { type: GraphQLString },
        Title: { type: GraphQLString },
        Domain: { type: GraphQLString },
        BreachDate: { type: GraphQLString },
        AddedDate: { type: GraphQLString },
        ModifiedDate: { type: GraphQLString },
        PwnCount: { type: GraphQLInt },
        Description: { type: GraphQLString },
        DataClasses: { type: new GraphQLList(GraphQLString) },
        IsVerified: { type: GraphQLBoolean },
        IsSensitive: { type: GraphQLBoolean },
        IsRetired: { type: GraphQLBoolean },
        IsSpamList: { type: GraphQLBoolean }
    })
})

// RootQuery
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // GET : All breaches
        allBreaches: {
            type: new GraphQLList(allBreachesType),
            resolve(parent, args) {
                return axios.get('https://haveibeenpwned.com/api/v2/breaches', config).then(res => res.data
                )
            }
        },
        // GET : A single Breach with the argument Name
        breach: {
            type: allBreachesType,
            args: { name: { type: GraphQLString } },
            resolve(parent, args) {
                return axios.get(`https://haveibeenpwned.com/api/v2/breach/${args.name}`, config).then(res => res.data
                )
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})