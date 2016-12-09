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

import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import user from './userReducer';
import chat from './chatReducer';

export default reduceReducers(combineReducers({
    user,
    chat
}), (state, action) => {
    switch (action.type) {
        case 'BAN':
            return {...state, banned: true};
        case 'SET_USERNAME':
            return {
                user: {...state.user, username: action.payload},
                chat: {...state.chat, username: action.payload}
            };
        default:
            return state;
    }
});