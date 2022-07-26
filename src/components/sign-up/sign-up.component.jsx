import { useState } from 'react';

import './sign-up.styles.scss';

import FormInput from '../reusable/form-input/form-input.component';
import CustomButton from '../reusable/custom-button/custom-button.component';

const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleName = e => {
    setDisplayName(e.target.value);
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = e => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="sign-up--container">
      <h2 className="title">Create a new account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPassword}
          label="Confirm Password"
          required
        />
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleName}
          label="Display Name"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
