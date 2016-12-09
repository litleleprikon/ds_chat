/**
 * Created by litleleprikon on 17/11/2016.
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

const AuthError = ({title, message, okPressed}) =>(
    <div className="panel panel-danger">
        <div className="panel-heading">{title}</div>
        <div className="panel-body">
            {message}
            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={okPressed}>Ok</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
        okPressed: () => {
            dispatch({type: 'ERROR_VIEWED'})
        }
    }
};

export default connect(null, mapDispatchToProps)(AuthError);