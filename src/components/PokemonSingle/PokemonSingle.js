import { useParams } from "react-router";
import styles from "./PokemonSingle.module.css";
import { useQuery } from "@apollo/client";
import { POKE_API_SINGLE } from "../../queries/Queries";

const PokemonSingle = (props) => {
  const paramCode = useParams();
  const { loading, error, data } = useQuery(POKE_API_SINGLE, {
    variables: { name: paramCode.pokeCode },
  });
  console.log(paramCode);
  console.log(data);

  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    return <p>Error on data fetching</p>;
  }

  if (data) {
    return <div>
    {data.pokemon.name}</div>;
  }

  return <div>{paramCode.pokeCode}</div>;
};

export default PokemonSingle;
