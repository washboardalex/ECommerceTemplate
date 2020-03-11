import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';
import IShopItemCollection from '../../models/IShopItemCollection';
import IShopItem from '../../models/IShopItem';

const CollectionPreview = ({title, items} : IShopItemCollection) => (

    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, index) => index < 4)
                    .map((item: IShopItem) =>(
                        <CollectionItem key={item.id} {...item} />
                    ))
            }
        </div>
    </div>

);

export default CollectionPreview;