import React from 'react';

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import { AppState } from '../../redux/_root-reducer';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';


interface IHeaderProps {
    currentUser: any
}

const mapStateToProps = (state : AppState) => ({
    currentUser: state.user.currentUser
});

const Header = ({ currentUser } : IHeaderProps) => {

    return (
    <div className='header'>
        <div className='logo-container'>
            <Link to='/'>
                <Logo className='logo' />
            </Link>
        </div>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser  !== null
                ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                : 
                <Link className='option' to='/signin'>SIGN IN</Link>

            }
        </div>    
    </div>  
)};

export default connect(mapStateToProps)(Header);