import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';

function Login() {

  const [justifyActive, setJustifyActive] = useState('tab1');;


  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  // Check authen
  const history = useHistory();
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  // Login tab
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState('');

  const handLogin = () => {
    let myHeaders = new Headers();
    myHeaders.append("Cookie", document.cookie);

    let format = new FormData();
    format.append("email", email);
    format.append("password", password);
    format.append("remember_me", rememberMe);

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: format,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/auth/login/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    // Once login is successful, update authentication status
    setIsAuthenticated(true);

    // Redirect to home page
    history.push('/home');
  }

  // Register tab
  const [name, setName] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [acceptTerms, setAcceptTerms] = useState('');

  const handRegister = () => {
    let format = new FormData();
    format.append("name", name);
    format.append("email", emailRegister);
    format.append("password", passwordRegister);
    format.append("confirm_password", passwordConfirm);
    format.append("accept_terms", acceptTerms);

    let requestOptions = {
      method: 'POST',
      body: format,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/auth/register/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }



  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm" />
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput
            wrapperClass='mb-4'
            label='Email address'
            id='form1'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Password'
            id='form2'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox
              name='flexCheck'
              value=''
              id='flexCheckDefault'
              label='Remember me'
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn
            className="mb-4 w-100"
            onClick={handLogin}
          >
            Sign in
          </MDBBtn>
          <p className="text-center">Not a member? <a href="#!">Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign un with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm" />
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput
            wrapperClass='mb-4'
            label='Name'
            id='form1'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Email'
            id='form1'
            type='email'
            value={emailRegister}
            onChange={(e) => setEmailRegister(e.target.value)}
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Password'
            id='form1'
            type='password'
            value={passwordRegister}
            onChange={(e) => setPasswordRegister(e.target.value)}
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Confirm Password'
            id='form1'
            type='password'
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox
              name='flexCheck'
              id='flexCheckDefault'
              label='I have read and agree to the terms'
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
            />
          </div>

          <MDBBtn
            className="mb-4 w-100"
            onClick={handRegister}
          >
            Sign up
          </MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Login;