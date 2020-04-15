import React from 'react';
import ICollectionItemCollection from '../../types/models/ICollectionItemCollection';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { RouteComponentProps as IReactRouterProps } from 'react-router';
import CollectionPage from '../collection/collection.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Dispatch } from 'redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import { fArgReturn } from '../../types/FunctionTypes';
import { IShopData } from '../../types/models/IShopData';
import WithSpinner from '../../components/with-spinner/with-spinner.component';


interface IDispatchProps {
    updateCollections: fArgReturn
}

type ShopPageProps = IDispatchProps & IReactRouterProps;

interface ILocalState {
    loading: boolean
}

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component<ShopPageProps, ILocalState > {

    state: ILocalState = {
        loading: true
    }

    unsubscribeFromSnapshot : () => any = () => false;

    componentDidMount() {

        const { updateCollections } = this.props;

        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        });
    }
    
    render() {
        const { match } : ShopPageProps = this.props;
        const { loading } : ILocalState = this.state;

        return (
            <div className='shop-page'>
                <Route 
                    exact path={`${match.path}`} 
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} 
                />

                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} 
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateCollections: (collectionsMap : IShopData) => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);