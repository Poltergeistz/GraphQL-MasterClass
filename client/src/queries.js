import gql from 'graphql-tag'

export const BREACHES_QUERY = gql`
query allBreaches {
    allBreaches {
        Name
        Title
        Domain
        BreachDate
        Description
        AddedDate
        ModifiedDate
        PwnCount
        DataClasses 
        IsVerified
        IsSensitive
        IsRetired
        IsSpamList
    }
}
`