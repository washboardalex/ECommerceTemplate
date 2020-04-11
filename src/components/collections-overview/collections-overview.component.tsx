import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component'; 

import './collections-overview.styles.scss';
import ICollectionItemCollection from '../../types/models/ICollectionItemCollection';
import { AppState } from '../../redux/_root-reducer';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';


interface ICollectionsOverviewProps {
    collections: Array<ICollectionItemCollection>
}

const CollectionsOverView = ({collections} : ICollectionsOverviewProps) => (
    <div className='collections-overview'>
        {collections.map((collection : ICollectionItemCollection) => (
            <CollectionPreview key={collection.id} { ...collection } />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector<AppState, ICollectionsOverviewProps>({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverView);
