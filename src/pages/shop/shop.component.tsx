import React from 'react';
import ICollectionItemCollection from '../../types/models/ICollectionItemCollection';
import ICollectionItem from '../../types/models/ICollectionItem';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from '../../_dummydata/shoppingdata';


interface IShopPageState {
    collections: Array<ICollectionItemCollection>
}

class ShopPage extends React.Component<{},IShopPageState> {

    state: IShopPageState = { collections: SHOP_DATA }

    render() {

        const { collections } = this.state;

        return (
            <div className='shop-page'>
                {
                    collections
                        .map((collection : ICollectionItemCollection) => (
                            <CollectionPreview key={collection.id} { ...collection } />
                        ))
                }
            </div>
        );
    }
}

export default ShopPage;