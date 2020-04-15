import React from 'react';

import './with-spinner.styles.scss';

interface IWithSpinnerProps {
    isLoading: boolean
}

const WithSpinner = (WrappedComponent: React.ComponentType<any>) => {
    const Spinner = ({ isLoading, ...otherProps} : object & IWithSpinnerProps) => 
        (isLoading  
            ? (
                <div className='spinner-overlay'>
                    <div className='spinner-container'></div>
                </div>
            )
            :
                <WrappedComponent {...otherProps} />
        )

    return Spinner;
}



export default WithSpinner;