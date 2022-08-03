import { Author } from '../../utils/types';
import styles from './authorInfo.module.scss'

interface IProps {
    user: Author;
    storyURL: string;
}

export const AuthorInfoComponent = (props: IProps) => {
    const {user, storyURL} = props;
    return (
        <div className={styles.authorContainer}>
            <div className={styles.authorAvaContainer}>
                <img src='./assets/icon_author.png' alt="author_avatar" />
            </div>
            <div className={styles.bottomBlock}>
                <div className={styles.authorCreds}>
                    <h4>{user.id}</h4>
                    <p>
                        <img src='./assets/karma_icon.png' />
                        {user.karma}
                    </p>
                </div>
                {storyURL ? <a href={storyURL}>Read more</a> : <span>No Story Link</span>}
                
            </div>
        </div>
    );
}