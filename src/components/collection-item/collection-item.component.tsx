import React from 'react';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { fArgReturn } from '../../types/Functions';
import ICollectionItem from '../../models/ICollectionItem';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';


const mapDispatchToProps = (dispatch : Dispatch<AnyAction>) => ({
    addItem: (item : any) => dispatch(addItem(item))
})

interface ICollectionItemProps {
    item: ICollectionItem,
    addItem: fArgReturn
}

const CollectionItem = ({ item, addItem } : ICollectionItemProps) => {

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

export default connect(null, mapDispatchToProps)(CollectionItem);