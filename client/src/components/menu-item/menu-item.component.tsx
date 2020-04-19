import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import IDirectoryItem from '../../types/models/IDirectoryItem';
import CSS from 'csstype';

import './menu-item.styles.scss';

const MenuItem : React.FC<IDirectoryItem & RouteComponentProps> = (props) => {
    
    const {imageUrl, title, size, history, match, linkUrl} = props;
    const BgImgStyle: CSS.Properties = { backgroundImage: `url(${imageUrl})` };

    return (
        <div 
            className={`${size} menu-item`} 
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div className='background-image' style={BgImgStyle} />
            <div className='content'>
                <h1 className='title'>{ title.toUpperCase() }</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
} 

export default withRouter(MenuItem);
