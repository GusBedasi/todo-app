import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css'

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return (
            <div className="list" key={item.key}>
                <p>
                    {item.text}
                    <span>
                        <FontAwesomeIcon className="faicons" icon="trash" onClick={() => props.deleteItem(item.key)}/>
                    </span>
                </p>
            </div>
        );
    })

    return listItems
}

export default ListItems;