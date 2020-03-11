import React from 'react';
import './homepage.styles.scss';
import { Directory } from '../../components/directory/directory.component'

const HomePage = () => {

    let products: Array<string> = ["Hats","Jackets","Sneakers","Womens","Mens"];

    return (
        <div className='homepage'>
            <Directory />
        </div>
    )

} 

export default HomePage;