import React, { ReactNode } from 'react';
import { fEmptyVoid, fEmptyReturn, fArgVoid, fArgReturn } from '../../types/FunctionTypes';

import './custom-button.styles.scss';

interface ICustomButtonProps {
    children: ReactNode,
    type?:  'submit' | 'reset' | 'button',
    onClick?: fEmptyVoid | fEmptyReturn | fArgVoid | fArgReturn,
    inverted?: boolean,
    isGoogleSignIn?: boolean
}

const CustomButton : React.FunctionComponent<ICustomButtonProps> = ({ children, type, onClick, inverted, isGoogleSignIn } ) => (
    <button 
        type={type} 
        className={`${inverted ? 'inverted' : '' } ${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} 
        onClick={onClick ? onClick : undefined} 
    >
        { children }
    </button>
);

export default CustomButton;