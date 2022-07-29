import styles from './button.module.scss';

export const Button = (props: any) => {
    return (<button className={styles.buttonText}>
        <span></span>
        {props.children}
    </button>)
};