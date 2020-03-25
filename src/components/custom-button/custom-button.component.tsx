import React, { ReactNode } from 'react';

import './custom-button.styles.scss';

interface ICustomButtonProps {
    children: ReactNode,
    type: string
}

const CustomButton : React.FunctionComponent<ICustomButtonProps> = ({ children } : ICustomButtonProps) => (
    <button className='custom-button'>
        { children }
    </button>
);

export default CustomButton;