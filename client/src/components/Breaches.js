import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import BreachItem from './BreachItem';
import Loading from './Loading';

const BREACHES_QUERY = gql`
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

class Breaches extends Component {
    render() {
        return (
            <Fragment>
                <div className="ui container">
                <div className="ui divider"></div>
                <h1 className="ui header">All Breaches</h1>
                <div className="ui cards">
                <Query query={BREACHES_QUERY}>
                {
                    ({loading, error, data}) => {
                        if(loading) return <Loading />
                        if(error) console.log(error)

                        // console.log(data)
                        return <Fragment>
                            {
                                data.allBreaches.map(breach => (<BreachItem key={breach.Name} breach={breach} />))
                            }
                        </Fragment>
                    }
                }
                </Query>
                </div>
                </div>
            </Fragment>
        );
    }
}

export default Breaches;