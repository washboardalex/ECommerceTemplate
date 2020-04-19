import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
    
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';
import { AppState } from '../../redux/_root-reducer';

interface ICollectionContainerProps {
    isLoading: boolean
}

const mapStateToProps = createStructuredSelector<AppState, ICollectionContainerProps>({
    isLoading: (state : AppState) => !selectIsCollectionLoaded(state)
});

export default connect(mapStateToProps)(WithSpinner(CollectionPage));
