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
import io from 'socket.io-client'

const Login = ({
    onLoginClick,
    onUsernameChanged,
    onPasswordChanged,
    credentials
}) => {
    return (
        <div id="login" className="panel panel-default">
            <div className="panel-heading">
                <h1>Login please</h1>
            </div>
            <div className="panel-body">
                <form onSubmit={e => {
                    e.preventDefault();
                    onLoginClick(credentials);
                }}>
                    <div className="form-group">
                        <label htmlFor="login-input-username">Username</label>
                        <input onChange={onUsernameChanged} type="text" className="form-control"
                               id="login-input-username" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="login-input-password">Password</label>
                        <input onChange={onPasswordChanged} type="password" className="form-control"
                               id="login-input-password" placeholder="Password"/>
                    </div>
                    <button type="submit" id="button-submit-login" className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
};

const addSocketHandlers = (socket, dispatch) => {
    socket.on('message', function (msg) {
        dispatch({type: 'MESSAGE_RECEIVED', payload: msg});
    });
    socket.on('ban', function () {
        dispatch({type: 'BAN'})
    });
    socket.on('approve', function (id) {
        dispatch({type: 'APPROVE', payload: id})
    });
    socket.on('service', function (msg) {
        dispatch({type: 'SERVICE', payload: msg})
    })
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginClick: (credentials) => {
            dispatch({type: 'LOGIN_REQUEST_SENT'});
            var socket = io.connect();
            socket.on('connect', function () {
                socket.emit('authentication', {username: credentials.username, password: credentials.password});
                socket.on('authenticated', function () {
                    addSocketHandlers(socket, dispatch);
                    dispatch({type: 'SET_USERNAME', payload: credentials.username});
                    dispatch({type: 'CONNECTION_ESTABLISHED', payload: socket});
                });
                socket.on('unauthorized', function(err){
                    dispatch({type: 'LOGIN_ERROR', payload: "There was an error with the authentication:" + err.message});
                });
            });
        },
        onUsernameChanged: (e) => {
            dispatch({type: 'LOGIN_USERNAME_CHANGED', payload: e.target.value})
        },
        onPasswordChanged: (e) => {
            dispatch({type: 'LOGIN_PASSWORD_CHANGED', payload: e.target.value})
        }
    }
};

export default connect(state => ({credentials: state.user.login.credentials}), mapDispatchToProps)(Login);
