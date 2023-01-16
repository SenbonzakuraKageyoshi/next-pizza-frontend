import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './removeCartItemButton.module.scss';

const RemoveCartItemButton = React.memo(() => {
    return (
        <button className={styles.removeCartItem}>
            <FontAwesomeIcon icon={faTrash} className={styles.removeButton}/>
        </button>
    );
});

export default RemoveCartItemButton;