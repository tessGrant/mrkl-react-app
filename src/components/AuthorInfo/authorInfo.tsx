import styles from './authorInfo.module.scss'


export const AuthorInfoComponent = (props: any) => {
    return (
        <div className={styles.authorContainer}>
            <div className={styles.authorAvaContainer}>
                <img src='./assets/icon_author.png' alt="author_avatar" />
            </div>
            <div className={styles.bottomBlock}>
                <div className={styles.authorCreds}>
                    <h4>{props.user.id}</h4>
                    <p>
                        <img src='./assets/karma_icon.png' />
                        {props.user.karma}
                    </p>
                </div>
                <a href={props.storyURL}>Read more</a>
            </div>
        </div>
    );
}