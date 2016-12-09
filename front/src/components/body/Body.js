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
import Chat from './chat/Chat';
import './Body.css';
import Auth from './auth/Auth'
import {connect} from 'react-redux';

const Body = ({username}) => {
    if (username) {
        return (<div className="container-fluid" id="body">
            <div className="col-md-8 col-md-offset-2"><Chat/></div>
        </div>)
    }
    return <Auth/>;
};

export default connect(state=>({username: state.user.username}))(Body);