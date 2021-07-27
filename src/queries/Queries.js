import { gql } from "@apollo/client";

const POKE_API = gql`
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
      url
      name
      image
    }
  }
}
`;

export default POKE_API;
