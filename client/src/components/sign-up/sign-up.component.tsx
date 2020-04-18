import React, { FormEvent, ChangeEvent } from 'react';
import ObjectWithStringKey from '../../types/ObjectWithStringKey';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';


interface ISignUpState extends ObjectWithStringKey { //TS compiler doesnt like setState in handleChange event
    displayName: string,
    email: string,
    password: string,
    confirmPassword: string
}

class SignUp extends React.Component<{}, ISignUpState> {
    
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } : ISignUpState = this.state;

        if (password !== confirmPassword) {
            alert('passwords don\'t match');
            return;
        }   

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument(user, { displayName });
        } catch (error) {
            console.error(error);
        }

    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } : HTMLInputElement = event.target;
        this.setState({ [name]: value });        
    }

    render() {

        const { displayName, email, password, confirmPassword } : ISignUpState = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>
                    I do not have an account
                </h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text' 
                        name='displayName' 
                        value={displayName} 
                        handleChange={this.handleChange} 
                        label='Display Name' 
                        required
                    />

                    <FormInput 
                        type='email' 
                        name='email' 
                        value={email} 
                        handleChange={this.handleChange} 
                        label='Email' 
                        required
                    />

                    <FormInput 
                        type='password' 
                        name='password' 
                        value={password} 
                        handleChange={this.handleChange} 
                        label='Password' 
                        required
                    />

                    <FormInput 
                        type='password' 
                        name='confirmPassword' 
                        value={confirmPassword} 
                        handleChange={this.handleChange} 
                        label='Confirm Password' 
                        required
                    />

                    <CustomButton type='submit'> SIGN UP </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;