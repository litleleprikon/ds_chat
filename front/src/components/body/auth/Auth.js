/**
 * Created by litleleprikon on 13/11/2016.
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
import './Auth.css';
import Login from './loginRegister/Login';
import Register from './loginRegister/Register';
import Error from './AuthError'

const Auth = (props) => {
    if (props.error) {
        return <Error title="Whoops, error occurred" message={props.error}/>
    }
    if (props.login.formRequested) {
        return <Login/>
    }

    if (props.register.formRequested) {
        return <Register/>
    }

    return (
        <div id="auth">
            <div><h1>Welcome everybody to my Chat</h1></div>
            <button type="button" className="btn btn-primary" onClick={props.onWantLoginClick}>Login
            </button>
            <button type="button" className="btn btn-default" onClick={props.onWantRegisterClick}>
                Register
            </button>
        </div>);
};

const mapDispatchToProps = (dispatch) => {
    return {
        onWantLoginClick: () => {
            dispatch({type: 'WANT_LOGIN_PRESSED'});
        },
        onWantRegisterClick: () => {
            dispatch({type: 'WANT_REGISTER_PRESSED'});
        }
    }
};


export default connect(state => ({...state.user}), mapDispatchToProps)(Auth);