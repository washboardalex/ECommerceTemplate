import React, { ChangeEvent, FormEvent } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

interface ISignInState {
    email : string,
    password : string
}

class SignIn extends React.Component<{}, ISignInState> {
    state: ISignInState = {
        email: '',
        password: ''
    }

    handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.setState({email: '', password:''})
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
                
                <form onSubmit={this.handleSubmit}>
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

                    <CustomButton type='submit'> Sign In </CustomButton>
                    
                </form>

            </div>
        );
    }
}

export default SignIn;