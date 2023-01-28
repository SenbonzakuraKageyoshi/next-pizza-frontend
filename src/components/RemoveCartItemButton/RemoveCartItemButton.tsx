import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './removeCartItemButton.module.scss';

interface IRemoveCartItemButton {
    onRemoveHandler: () => void,
    disabled: boolean
}

const RemoveCartItemButton = React.memo(({ onRemoveHandler, disabled }: IRemoveCartItemButton) => {
    return (
        <button className={styles.removeCartItem} onClick={onRemoveHandler} disabled={disabled}>
            <FontAwesomeIcon icon={faTrash} className={styles.removeButton}/>
        </button>
    );
});

export default RemoveCartItemButton;