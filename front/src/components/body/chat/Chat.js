/**
 * Created by litleleprikon on 15/11/2016.
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
// import {connect} from 'react-redux';
import MessagesList from './chat-window/MessagesList';
import MessageField from './chat-window/MessageField';

const Chat = (props) => {
    return (
        <div>
            <MessagesList/>
            <MessageField/>
        </div>
    )
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onWantLoginClick: () => {
//             dispatch({type: 'WANT_LOGIN_PRESSED'});
//         }
//     }
// };

export default Chat;