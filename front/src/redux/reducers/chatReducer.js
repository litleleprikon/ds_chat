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

const defaultStore = {
    socket: null,
    username: null,
    messages: {},
    currentMessage: ""
};

export default function reducer(state = defaultStore,
                                action) {
    switch (action.type) {
        case 'BAN':
            return defaultStore;
        case 'CONNECTION_ESTABLISHED':
            return {...state, socket: action.payload};
        case 'MESSAGE_CHANGED':
            return {...state, currentMessage: action.payload};
        case 'MESSAGE_RECEIVED':
            return {
                ...state,
                currentMessage: "",
                messages: {
                    ...state.messages,
                    [action.payload.id]: {
                        user: action.payload.username,
                        text: action.payload.message,
                    }
                }
            };
        case 'NEW_MESSAGE':
            var id = '' + action.payload.time + state.username;
            state.socket.emit('message', {id: id, message: state.currentMessage});
            return {
                ...state,
                currentMessage: "",
                messages: {
                    ...state.messages,
                    [id]: {
                        user: state.username,
                        text: state.currentMessage,
                        approved: false
                    }
                }
            };
        case 'APPROVE':
            var id = action.payload;
            var message = state.messages[id];
            if (message) {
                return {
                    ...state,
                    currentMessage: "",
                    messages: {
                        ...state.messages,
                        [id]: {
                            ...message,
                            approved: true
                        }
                    }
                };
            }
            return state;
        case 'SERVICE':
            return {
                ...state,
                messages: {
                    ...state.messages,
                    ['service' + new Date().getTime()]: {
                        user: 'service',
                        text: action.payload
                    }
                }
            };
        default:
            return state;
    }
};