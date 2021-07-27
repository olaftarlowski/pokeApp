import styles from "./PokemonItem.module.css";

const PokemonItem = (props) => {
  return (
    <div className={styles.item}>
      <h3 className={styles.name}>{props.id}. {props.name}</h3>
      <img className={styles.image} src={props.image} alt={`Pokemon ${props.name}`} />
      
    </div>
  );
};

export default PokemonItem;
