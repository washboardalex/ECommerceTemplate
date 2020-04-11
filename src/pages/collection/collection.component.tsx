import React from 'react';
import { RouteComponentProps, match } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { AppState } from '../../redux/_root-reducer';
import ICollectionItemCollection from '../../types/models/ICollectionItemCollection';

import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';


interface IParams {
    collectionId: string
}

interface IReactRouterProps extends RouteComponentProps {
    match: match<IParams>
}

interface IStateProps {
    collection: ICollectionItemCollection
}

type CollectionPageProps = IReactRouterProps & IStateProps;

const CollectionPage : React.FunctionComponent<CollectionPageProps> = ({collection}) => {
    
    console.log('collection is : ');
    console.log(collection)

    const { title, items } : ICollectionItemCollection = collection;

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state : AppState, ownProps : IReactRouterProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
