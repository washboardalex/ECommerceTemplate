import React from 'react';
import ICollectionItemCollection from '../../types/models/ICollectionItemCollection';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { AppState } from '../../redux/_root-reducer';
import { RouteComponentProps } from 'react-router';
import CollectionPage from '../collection/collection.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';


interface IShopPageProps extends RouteComponentProps {}

const ShopPage = ({ match } : IShopPageProps) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

export default ShopPage;