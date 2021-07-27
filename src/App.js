import { Redirect, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import Test from "./components/Test";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
  HttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://countries.trevorblades.com/" }),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className={styles.App}>
        <h1>headline main</h1>

        <Switch>
          <Route path="/" exact>
            <Redirect to="/dex"></Redirect>
          </Route>
          <Route path="/dex" exact>
            <Test></Test>
          </Route>
          <Route path="/dex/:pokeCode" exact>
            <Test></Test>
          </Route>

          <Route path="*" exact>
            <Redirect to="/dex"></Redirect>
          </Route>
        </Switch>
      </div>
    </ApolloProvider>
  );
}

export default App;
