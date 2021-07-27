import { gql } from "@apollo/client";

export const POKE_API = gql`
query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    nextOffset
    prevOffset
    status
    message
    results {
      id
      name
      image
    }
  }
}
`;

export const POKE_API_SINGLE = gql`
query pokemon($name: String!) {
  pokemon (name: $name) {
    id
    name
    message
  }
}
`;

