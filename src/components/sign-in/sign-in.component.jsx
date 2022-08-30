import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../reusable/form-input/form-input.component';
import CustomButton from '../reusable/custom-button/custom-button.component';
import { ReactComponent as GoogleIcon } from '../../assets/icons8-google.svg';

import './sign-in.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await signInWithAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate('/');
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
    await signInWithGooglePopup();

    navigate('/');
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
            <GoogleIcon className="google-icon" />
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
