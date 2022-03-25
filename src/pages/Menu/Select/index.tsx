import styles from './Select.module.scss';
import option from './options.json';
import {useState} from "react";
import classNames from "classnames";

export default function Select () {
    const [open, setOpen] = useState(false);
    return (
      <button className={styles.select} onClick={() => setOpen(!open)}>
            <span>Order by</span>
            <div className={classNames({
              [styles.select__options]: true,
              [styles["select__options--active"]]: open
            })}>
                {option.map(option => (
                    <div className={styles.select__option} key={option.value}>
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    )
}
