import { Redirect, Route, Switch, Link } from "react-router-dom";
import styles from "./App.module.css";
import PokemonFullList from "./components/PokemonFullList/PokemonFullList";
import PokemonSingle from "./components/PokemonSingle/PokemonSingle";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
  HttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import BackButton from "./UI/BackButton/BackButton";

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
  new HttpLink({ uri: "https://graphql-pokeapi.vercel.app/api/graphql" }),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className={styles.App}>
        <div className={styles.introSection}>
          <h1>Pokédex App</h1>
          <Link to="/">
            <BackButton>Back to full base</BackButton>
          </Link>
        </div>

        <Switch>
          <Route path="/" exact>
            <Redirect to="/dex"></Redirect>
          </Route>
          <Route path="/dex" exact>
            <PokemonFullList></PokemonFullList>
          </Route>
          <Route path="/dex/:pokeCode" exact>
            <PokemonSingle></PokemonSingle>
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
