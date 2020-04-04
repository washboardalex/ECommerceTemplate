import React from 'react';
import IShopItemCollection from '../../models/IShopItemCollection';
import IShopItem from '../../models/IShopItem';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from '../../_dummydata/shoppingdata';


interface IShopPageState {
    collections: Array<IShopItemCollection>
}

class ShopPage extends React.Component<{},IShopPageState> {

    state: IShopPageState = { collections: SHOP_DATA }

    render() {

        const { collections } = this.state;

        return (
            <div className='shop-page'>
                {
                    collections
                        .map((collection : IShopItemCollection) => (
                            <CollectionPreview key={collection.id} { ...collection } />
                        ))
                }
            </div>
        );
    }
}

export default ShopPage;