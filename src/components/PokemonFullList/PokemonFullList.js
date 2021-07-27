import { useQuery } from "@apollo/client";
import POKE_API from "../../queries/Queries";
import PokemonItem from "../Pokemon/PokemonItem";
import styles from "./PokemonFullList.module.css";

const PokemonFullList = () => {
  const { loading, error, data } = useQuery(POKE_API, {
    variables: { limit: 10, offset: 0 },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data) {
    return (
      <div className={styles.wrapper}>
        {data.pokemons.results.map((item) => {
          return (
            <PokemonItem key={item.id} id={item.id} name={item.name} image={item.image} />
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <h2>Data not found</h2>
    </div>
  );
};

export default PokemonFullList;
