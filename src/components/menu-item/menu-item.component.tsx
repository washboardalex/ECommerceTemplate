import React from 'react';
import IDirectoryItem from '../../models/IDirectoryItem';
import CSS from 'csstype';
import './menu-item.styles.scss';

const MenuItem = ({imageUrl, linkUrl, title, id, size} : IDirectoryItem) => {

    const BgImgStyle: CSS.Properties = { backgroundImage: `url(${imageUrl})` };
    return (
        <div key={id.toString()} className={`${size} menu-item`} >
            <div className='background-image' style={BgImgStyle} />
            <div className='content'>
                <h1 className='title'>{ title.toUpperCase() }</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
} 

export default MenuItem