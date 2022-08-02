import styles from './story.module.scss'

export const StoryComponent = (props: any) => { 
    const unix_timestamp = props.story.time;
    const date = new Date(unix_timestamp * 1000).toLocaleString();
    return (
        <div className={styles.storyContainer}>
            <div className={styles.imageContainer}>
                <img src="/assets/hn_static.png" alt="anonym_static" />
            </div>
            <div className={styles.storyInfoBlock}>
                <div className={styles.storyDate}>Created: {date}</div>
                <div className={styles.scoreBlock}>
                    <img src='./assets/score.png' />
                    <p> {props.story.score} </p>
                </div>
            </div>
            <h2>{props.story.title}</h2>
        </div>
    );
};