import { useParams } from "react-router";
import styles from "./PokemonSingle.module.css";

const PokemonSingle = (props) => {
  const paramCode = useParams();
  console.log(paramCode);

  return <div>{paramCode.pokeCode}</div>;
};

export default PokemonSingle;
