import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';
import ICollectionItemCollection from '../../types/models/ICollectionItemCollection';
import ICollectionItem from '../../types/models/ICollectionItem';

const CollectionPreview = ({title, items} : ICollectionItemCollection) => (

    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, index) => index < 4)
                    .map((item: ICollectionItem) =>(
                        <CollectionItem key={item.id} item={item} />
                    ))
            }
        </div>
    </div>

);

export default CollectionPreview;