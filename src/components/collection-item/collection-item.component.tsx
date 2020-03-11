import React from 'react';
import './collection-item.styles.scss';
import IShopItem from '../../models/IShopItem';

const CollectionItem = ({name, price, imageUrl} : IShopItem) => (
    <div className='collection-item'>
        <div className='image' style={{backgroundImage: `url(${imageUrl})`}}>
        </div>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
);

export default CollectionItem;