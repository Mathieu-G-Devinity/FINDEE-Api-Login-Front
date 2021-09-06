import React, { useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.scss';

const UsersList = ({ usersList }) => (
    <div className="usersList">
        <div className="usersList-container"> 
            <div className="usersList-containerTitle">
                <span className="usersList-span" >Liste des utilisateurs</span>    
                <div className="usersList-containerList">
    {
    // we only want to get the users email already in our database so we are mapping on usersList  array in our state
    }
                <ul>
                    {usersList.map(({ _id, email }) => (
                    <li key={_id}>{email}</li>))}
             
                </ul> 
                </div>
                
            </div>
        </div>
    </div>   
);

export default UsersList;