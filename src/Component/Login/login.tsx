import React, { useEffect, useState } from 'react';
import Button from '../UI/button';
import Card from '../UI/card';

//import Card from '../UI/Card/Card';
import classes from './login.module.css';
//import Button from '../UI/Button/Button';

const Login = (props:any) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState<boolean>();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>();
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  
  useEffect(() => {
    return() => {
        console.log('CLEAN UP LAST');
        //clearTimeout(cleanUpHandler);
    };
  },[enteredPassword]);
  useEffect(() => {
    //debouncing
    const cleanUpHandler = setTimeout(() => {
        console.log('Checking form validity');
        setFormIsValid(
            enteredEmail.includes('@') && enteredPassword.trim().length > 6
          );
    } , 500)

    //clean up function
    return() => {
        console.log('CLEAN UP');
        clearTimeout(cleanUpHandler);
    };
      //[] dependencies added
  } , [enteredEmail , enteredPassword])

  const emailChangeHandler = (event:any) => {
    setEnteredEmail(event.target.value);

    
  };

  const passwordChangeHandler = (event:any) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event:any) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
