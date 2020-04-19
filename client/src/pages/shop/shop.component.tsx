import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { RouteComponentProps as IReactRouterProps } from 'react-router';
import CollectionPageContainer from '../collection/collection.container';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import { AnyAction } from 'redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../redux/_root-reducer';

interface IStateProps {
    isCollectionFetching: boolean;
    isCollectionLoaded: boolean;
}

interface IDispatchProps {
    fetchCollectionsStartAsync: any
}

type ShopPageProps = IStateProps & IDispatchProps & IReactRouterProps;

class ShopPage extends React.Component<ShopPageProps, {} > {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }
    
    render() {
        const { match } : ShopPageProps = this.props;

        return (
            <div className='shop-page'>
                <Route 
                    exact path={`${match.path}`} 
                    component={CollectionsOverviewContainer} 
                />

                <Route 
                    path={`${match.path}/:collectionId`} 
                    component={CollectionPageContainer} 
                />
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch: ThunkDispatch<any, AppState, AnyAction>) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
