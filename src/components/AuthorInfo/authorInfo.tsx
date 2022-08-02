import styles from './authorInfo.module.scss'


export const AuthorInfoComponent = (props: any) => {
    return (
        <div className={styles.authorContainer}>
            <div className={styles.authorAvaContainer}>
                <img src='./assets/icon_author.png' alt="author_avatar" />
            </div>
            <div className={styles.authorText}>
                <h4>{props.user.id}</h4>
                <p>{props.user.karma}</p>
            </div>
        </div>
    );
}