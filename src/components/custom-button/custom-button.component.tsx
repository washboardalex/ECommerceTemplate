import React, { ReactNode } from 'react';
import { fEmptyVoid, fEmptyReturn, fArgVoid, fArgReturn } from '../../types/Functions';

import './custom-button.styles.scss';

interface ICustomButtonProps {
    children: ReactNode,
    type?:  'submit' | 'reset' | 'button',
    onClick?: fEmptyVoid | fEmptyReturn | fArgVoid | fArgReturn,
    isGoogleSignIn?: boolean
}

const CustomButton : React.FunctionComponent<ICustomButtonProps> = ({ children, type, onClick, isGoogleSignIn } : ICustomButtonProps) => (
    <button 
        type={type} 
        className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} 
        onClick={onClick ? onClick : undefined} 
    >
        { children }
    </button>
);

export default CustomButton;