import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.scss';

const Login = ({
    email,
    password,
    changeEmail,
    changePassword,
    handleLogin,
}) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleLogin();
      };
      const handleChangeEmail = (evt) => {
        changeEmail(evt.target.value);
      };
      const handleChangePassword = (evt) => {
        changePassword(evt.target.value);
      };

  return (
        <div className="loginForm">
            <div className="loginForm-container"> 
                <div className="loginForm-containerLogin">
                    <span className="loginForm-span" >Connectez-vous</span>    
                    <Form className="loginForm-form" onSubmit={handleSubmit}>
                        <div className="loginForm-field">
                            <label className="loginForm-fieldLabel">Votre email:</label>
                            <Form.Input type="mail" className="loginForm-fieldInput" onChange={handleChangeEmail} value={email} placeholder="exemple: email@test.com"/>
                        </div>
                        <div className="loginForm-field">
                            <label className="loginForm-fieldLabel">Votre mot de passe:</label>
                            <Form.Input type="password" className="loginForm-fieldInput" onChange={handleChangePassword} value={password} placeholder="Tapez le mot de passe"/>
                        </div>
                        <div className="loginForm-buttonSubmitWrapper">
                            <Button className="loginForm-registerButton">Se connecter</Button>
                        </div>
                    </Form>
                    <div className="loginForm-buttonRegister">
                        <Button as={Link} to="/register" exact={+true}>S'inscrire</Button>
                    </div>
                </div>
            </div>
        </div>   
  );
};

export default Login;