/**
 * Created by litleleprikon on 14/11/2016.
 *  ___        __    ___           ___                              __
 * /\_ \    __/\ \__/\_ \         /\_ \                          __/\ \
 * \//\ \  /\_\ \ ,_\//\ \      __\//\ \      __   _____   _ __ /\_\ \ \/'\     ___     ___
 *   \ \ \ \/\ \ \ \/ \ \ \   /'__`\\ \ \   /'__`\/\ '__`\/\`'__\/\ \ \ , <    / __`\ /' _ `\
 *    \_\ \_\ \ \ \ \_ \_\ \_/\  __/ \_\ \_/\  __/\ \ \L\ \ \ \/ \ \ \ \ \\`\ /\ \L\ \/\ \/\ \
 *    /\____\\ \_\ \__\/\____\ \____\/\____\ \____\\ \ ,__/\ \_\  \ \_\ \_\ \_\ \____/\ \_\ \_\
 *    \/____/ \/_/\/__/\/____/\/____/\/____/\/____/ \ \ \/  \/_/   \/_/\/_/\/_/\/___/  \/_/\/_/
 *                                                   \ \_\
 *                                                    \/_/
 */

import React from 'react';
import {connect} from 'react-redux';
import '../LoginRequest.css'
import axios from 'axios';

const Register = ({onRegisterClick, onUsernameChanged, onPasswordChanged, registerFormRequested, requestSent, registerSuccess, credentials}) => {
    return (
        <div id="login" className="panel panel-default">
            <div className="panel-heading">
                <h1>Register please</h1>
            </div>
            <div className="panel-body">
                <form onSubmit={e => {
                    e.preventDefault();
                    onRegisterClick(credentials)
                }}>
                    <div className="form-group">
                        <label htmlFor="register-input-username">Username</label>
                        <input onChange={onUsernameChanged} type="text" className="form-control" id="register-input-username" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="register-input-password">Password</label>
                        <input onChange={onPasswordChanged} type="password" className="form-control" id="register-input-password" placeholder="Password"/>
                    </div>
                    <button type="submit" id="button-submit-login" className="btn btn-success">Submit
                    </button>
                </form>
            </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRegisterClick: (input) => {
            dispatch({type: 'REGISTER_REQUEST_SENT'});
            axios.post('/api/register', {username: input.username, password: input.password})
                .then((result) => {dispatch({type: 'REGISTER_SUCCESS'})})
                .catch((err) => {dispatch({type: 'REGISTER_ERROR', payload: err.message})})
        },
        onUsernameChanged: (e) => {
            dispatch({type: 'REGISTER_USERNAME_CHANGED', payload: e.target.value})
        },
        onPasswordChanged: (e) => {
            dispatch({type: 'REGISTER_PASSWORD_CHANGED', payload: e.target.value})
        }
    }
};

export default connect(state => ({...state.user.register}), mapDispatchToProps)(Register);
