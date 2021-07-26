import { gql } from "@apollo/client";

const api = gql`
  query {
    continents {
      code
      name
    }
  }
`;

export default api;
