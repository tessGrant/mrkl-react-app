import styles from './text.module.scss'

interface IText {
    strong?: boolean;
    green?: boolean;
    children: any;
}

export const Text = (props: IText) => {
    const {strong, children, green} = props;
    return (
        <div className={styles.textContainer}>
            <p className={`styles.textBase
                ${strong && styles.strongClass} 
                ${green && styles.greenClass}`
                }>{children}</p>
        </div>
    );
}