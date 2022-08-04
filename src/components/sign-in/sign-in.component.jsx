import { useState } from 'react';

import './sign-in.styles.scss';

import FormInput from '../reusable/form-input/form-input.component';
import CustomButton from '../reusable/custom-button/custom-button.component';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = e => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await signInWithAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('The entered password is incorrect');
          break;
        case 'auth/user-not-found':
          alert('No user associated with entered email');
          break;
        default:
          console.log(error);
      }
    }

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: '', password: '' });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in--container">
      <h2 className="sign-in-header">I already have an account</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            GOOGLE SIGN IN
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
