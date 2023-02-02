import React, { Dispatch, SetStateAction } from 'react';
import { useAppDispatch } from '../../redux/redux-hooks';
import { changeIsOpened } from '../../redux/modalSlice/modal';
import styles from './timeComponent.module.scss';

interface ITimeComponentProps {
    setTime: Dispatch<SetStateAction<string>>;
    time: string
}

const TimeComponent = ({ setTime, time }: ITimeComponentProps) => {

    const dispatch = useAppDispatch();

    const times = 
    [
        {id: 1, value: 'Побыстрее'},
        {id: 1, value: '15:00 - 15:30'},
        {id: 1, value: '15:30 - 16:00'},
        {id: 1, value: '16:00 - 16:30'},
        {id: 1, value: '16:30 - 17:00'},
        {id: 1, value: '17:00 - 17:30'},
        {id: 1, value: '17:30 - 18:00'},
        {id: 1, value: '18:00 - 18:30'},
        {id: 1, value: '18:30 - 19:00'},
        {id: 1, value: '19:00 - 19:30'},
    ];

    const onClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
        let target = e.target as HTMLLIElement;
        
        setTime(target.innerHTML)
        dispatch(changeIsOpened())
    }

  return (
    <ul className={styles.timesList}>
        {times.map((el) => (
            el.value === time
            ?
            <li className={styles.timesListItemActive} key={el.id}>
                {el.value}
            </li>
            :
            <li className={styles.timesListItem} key={el.id} onClick={(e) => onClickHandler(e)}>
                {el.value}
            </li>
        ))}
    </ul>
  )
}

export default TimeComponent