import styles from './Select.module.scss';
import option from './options.json';
import React, {useState} from "react";
import classNames from "classnames";
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md';

interface Props {
  select: string,
  setSelect: React.Dispatch<React.SetStateAction<string>>
}

export default function Select ({
  select,
  setSelect
}: Props) {
    const [open, setOpen] = useState(false);
    const nameSelect = select && option.find(option => option.value === select)?.name;
    return (
      <button
        className={classNames({
          [styles.select]: true,
          [styles["select--active"]]: select !== "",
        })}
        onClick={() => setOpen(!open)}
        onBlur={() => setOpen(false)}
      >
            <span>{nameSelect || "Order by"}</span>
            {open ? (<MdKeyboardArrowUp size={22}/>) : (<MdKeyboardArrowDown size={22}/>)}
            <div className={classNames({
              [styles.select__options]: true,
              [styles["select__options--active"]]: open
            })}>
                {option.map(option => (
                    <div className={styles.select__option} key={option.value} onClick={() => setSelect(option.value)}>
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    )
}
