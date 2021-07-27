import { useQuery } from "@apollo/client";
import POKE_API from "../../queries/Queries";
import styles from './FullList.module.css'

const Test = () => {
  const { loading, error, data } = useQuery(POKE_API, {
    variables: { limit: 10, offset: 0 },
  });
  let content;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  // console.log(data);
  if (data) {
    return (content = (
      <div className={styles.wrapper}>
        {data.pokemons.results.map((item) => {
          return (
            <div key={item.name}>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    ));
  }

  return (
    <div>
      <h2>TEstO</h2>
      {content}
    </div>
  );
};

export default Test;
