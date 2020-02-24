import React from 'react';

const HomePage = () => {

    let products: Array<String> = ["Hats","Jackets","Sneakers","Womens","Mens"];

    return (
        <div className="homepage">
            {products.map((product, index) => (
                <div key={index.toString()} className="directory-menu">
                    <div className="menu-item">
                        <div className="content">
                            <h1 className="title">{ product }</h1>
                            <span className="subtitle">Shop Now</span>
                        </div>
                    </div>
                </div>  
            ))}
        </div>
    )

} 

export default HomePage;