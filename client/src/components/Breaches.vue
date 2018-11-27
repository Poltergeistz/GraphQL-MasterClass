<template>
  <ApolloQuery :query="query">
    <template slot-scope="{ result: { loading, error, data } }">
      <span v-if="loading">
        <div class="text-xs-center">
          <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
          ></v-progress-circular>
          <h3 class="font-weight-light.font-italic">
            We're fetching that content for you.</h3>
        </div>
      </span>
      <span v-else-if="error">
        <div>
          <v-alert
            :value="true"
            type="error"
          >
          An error occured.
          </v-alert>
          </div>
      </span>
        <section v-if="data">
          <v-container>
            <h1 class="font-weight-light">All Breaches</h1>
            <v-divider></v-divider>
            <v-responsive :key="breach.Name" v-for="breach in data.allBreaches" >
              <v-card-title primary-title>
                <h3 class="headline mb-0">{{breach.Name}}</h3>
                <v-spacer></v-spacer>
                <a :href="breach.Domain">{{breach.Domain}}</a>
                </v-card-title>
                <v-card-text>
                <p class="body-1">{{breach.Description}}</p>
                <p class="font-weight-thin.font-italic">Users compromised : <v-chip label outline color="red">{{breach.PwnCount}}</v-chip></p>
                <p class="font-weight-thin.font-italic">Data leaked : {{breach.DataClasses}}</p>
                <v-spacer></v-spacer>
                <p class="caption">
                  Provided by 
                  <a href="https://haveibeenpwned.com/">haveibeenpwned.com</a>
                  </p>
                </v-card-text>
            </v-responsive>
            </v-container>
        </section> 
    </template>
  </ApolloQuery>
</template>

<script>
import { BREACHES_QUERY } from '../queries.js'
// import Loading from './Loading'
// import Error from './Error'

export default {
  name: 'Breaches',
  data() {
    return {
      query: BREACHES_QUERY
    }
  }
}
</script>