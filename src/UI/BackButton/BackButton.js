import styles from './BackButton.module.css'

const BackButton = (props) => {
    
    return (
        <button className={styles.backButton}>
            {props.children}
        </button>
    )
}

export default BackButton;
