import styles from './Select.module.scss';
import option from './options.json';

export default function Ordenador () {
    return (
        <button className={styles.select}>
            <span>Order by</span>
            <div className={styles.select__options}>
                {option.map(option => (
                    <div className={styles.select__option} key={option.value}>
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    )
}