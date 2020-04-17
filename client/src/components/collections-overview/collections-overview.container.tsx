
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { RouteComponentProps as IReactRouterProps } from 'react-router';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';
import { AppState } from '../../redux/_root-reducer';
import { ICollectionsOverviewProps } from './collections-overview.component';

interface IStateProps {
    isLoading: boolean
}

const mapStateToProps = createStructuredSelector<AppState,IStateProps>({
    isLoading: selectIsCollectionFetching
});

export default connect(mapStateToProps)(WithSpinner(CollectionsOverview));