import React from 'react';

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { AppState } from '../../redux/_root-reducer';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';


interface IHeaderProps {
    currentUser: any,
    hidden: boolean
}

const Header : React.FunctionComponent<IHeaderProps> = ({ currentUser, hidden }) => {

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
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>  
)};

const mapStateToProps = createStructuredSelector<AppState, IHeaderProps>({
    currentUser: selectCurrentUser, 
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);