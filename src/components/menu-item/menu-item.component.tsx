import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import IDirectoryItem from '../../models/IDirectoryItem';
import CSS from 'csstype';
import './menu-item.styles.scss';

class MenuItem extends React.Component<IDirectoryItem & RouteComponentProps> {
    render() {
        const {imageUrl, linkUrl, title, id, size} = this.props;
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
    
} 

export default withRouter(MenuItem);