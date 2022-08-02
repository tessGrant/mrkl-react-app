import styles from './card.module.scss';

export const CardComponent = (props: any) => {
    return (
        <div className={styles.cardContainer}>
            {props.children}
        </div>
    );
}