import React, { ChangeEvent, FormEvent } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';


interface ISignInState {
    email : string,
    password : string
}

class SignIn extends React.Component<{}, ISignInState> {
    state: ISignInState = {
        email: '',
        password: ''
    }

    handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { email, password } : ISignInState = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password:''});
        } catch (error) {
            console.error(error);
        }
        
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const target = e.target as HTMLInputElement;

        const  { name, value } = target;
        const stateUpdate = { [name]: value } as Pick<ISignInState, keyof ISignInState>;
        this.setState( stateUpdate );
    }


    render () {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                
                <form>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={(e: ChangeEvent<HTMLInputElement>) =>  this.handleChange(e)}
                        label='Email'
                        required 
                    />

                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={(e: ChangeEvent<HTMLInputElement>) =>  this.handleChange(e)}
                        label='Password'
                        required 
                    />

                    <div className='buttons'>
                        <CustomButton onClick={this.handleSubmit} type='button'> Sign in </CustomButton>
                        <CustomButton 
                            type='button' 
                            onClick={signInWithGoogle}
                            isGoogleSignIn={true}
                        > 
                            Sign in with Google 
                        </CustomButton>
                    </div>

                </form>

            </div>
        );
    }
}

export default SignIn;