import { useQuery } from "@apollo/client";
import { useState } from "react";
import { POKE_API } from "../../queries/Queries";
import PokemonItem from "./Pokemon/PokemonItem";
import styles from "./PokemonFullList.module.css";

const PokemonFullList = () => {
  const { loading, error, data } = useQuery(POKE_API, {
    variables: { limit: 600, offset: 0 },
  });

  const [inputValue, setInputValue] = useState("");
  const [dataLimit, setDataLimit] = useState(36);
  const [sortByName, setSortByName] = useState(false);

  const inputFilterHandler = (event) => {
    setInputValue(event.target.value);
  };

  const loadMoreHandler = () => {
    setDataLimit((e) => e + 36);
  };
  const loadAllHandler = () => {
    setDataLimit(600);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data) {
    const dataResults = data.pokemons.results
      .slice(0, dataLimit)
      .filter((filtItem) => {
        if (!inputValue) return true;
        const lowerCase = inputValue.toLowerCase();
        return filtItem.id === +inputValue || filtItem.name.includes(lowerCase);
      })
      .map((item) => {
        return (
          <PokemonItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
          />
        );
      });

    if (sortByName) {
      dataResults.sort((a, b) => {
        if (a.props.name < b.props.name) {
          return -1;
        }
        if (a.props.name > b.props.namee) {
          return 1;
        }
        return 0;
      });
    }

    const sortNumberHandler = () => {
      setSortByName(true);
    };
    const sortNameHandler = () => {
      setSortByName(false);
    };

    return (
      <>
        <div className={styles.controls}>
          <input
            type="text"
            value={inputValue}
            onChange={inputFilterHandler}
            placeholder="Enter name or number..."
          />
          <button className={styles.btnMore} onClick={sortNumberHandler}>
            Sort by name
          </button>
          <button className={styles.btnMore} onClick={sortNameHandler}>
            Sort by number
          </button>
        </div>
        <div className={styles.wrapper}>{dataResults}</div>
        <div className={styles.bottomBtn}>
          <button className={styles.btnMore} onClick={loadMoreHandler}>
            Load more
          </button>
          <button className={styles.btnMore} onClick={loadAllHandler}>
            Load all
          </button>
        </div>
      </>
    );
  }

  return (
    <div>
      <h2>Data not found</h2>
    </div>
  );
};

export default PokemonFullList;

// {data.pokemons.results.map((item) => {
//   return (
//     <PokemonItem
//       key={item.id}
//       id={item.id}
//       name={item.name}
//       image={item.image}
//     />
//   );
// })}
