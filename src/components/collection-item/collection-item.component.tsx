import React from 'react';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { fArgReturn } from '../../types/Functions';
import ICollectionItem from '../../types/models/ICollectionItem';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

interface IDispatchProps {
    addItem: fArgReturn
}

interface IReceivedProps {
    item: ICollectionItem
}

type CollectionItemProps = IDispatchProps & IReceivedProps

const CollectionItem = ({ item, addItem } : CollectionItemProps) => {

    const { name, price, imageUrl } : ICollectionItem = item;
    
    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}>
            </div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton type={'button'} onClick={() => addItem(item)} inverted={true}>
                Add to cart
            </CustomButton>
        </div>
    )
};

const mapDispatchToProps = (dispatch : Dispatch<AnyAction>) => ({
    addItem: (item : any) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);