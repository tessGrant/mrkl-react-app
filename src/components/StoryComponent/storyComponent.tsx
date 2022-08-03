import { Story } from '../../utils/types';
import styles from './story.module.scss'

interface IProps {
    story: Story;
    children?: any;
}

export const StoryComponent = (props: IProps) => { 
    const {time, score, title} = props.story;
    const unix_timestamp = time;
    const date = new Date(unix_timestamp * 1000).toLocaleString();
    return (
        <>
        <div className={styles.storyContainer}>
            <div className={styles.imageContainer}>
                <img src="/assets/hn_static.png" alt="anonym_static" />
            </div>
            <div className={styles.storyInfoBlock}>
                <div className={styles.storyDate}>Created: {date}</div>
                <div className={styles.scoreBlock}>
                    <img src='./assets/score.png' />
                    <p> {score} </p>
                </div>
            </div>
            <h2>{title}</h2>
        </div>
        {props.children}
        </>
    );
};