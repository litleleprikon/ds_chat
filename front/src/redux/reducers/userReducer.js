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

const defaultStore = {
    username: null,
    register: {
        formRequested: false,
        requestSent: false,
        credentials: {
            username: null,
            password: null
        }
    },
    login: {
        formRequested: false,
        loginSent: false,
        credentials: {
            username: null,
            password: null
        }
    },
    error: null
};

export default function reducer(state = defaultStore,
                                action) {
    switch (action.type) {
        case 'BAN':
            return defaultStore;
        case 'REGISTER_USERNAME_CHANGED':
            return {
                ...state,
                register: {
                    ...state.register,
                    credentials: {
                        ...state.register.credentials,
                        username: action.payload
                    }
                }
            };
        case 'REGISTER_PASSWORD_CHANGED':
            return {
                ...state,
                register: {
                    ...state.register,
                    credentials: {
                        ...state.register.credentials,
                        password: action.payload
                    }
                }
            };
        case 'ERROR_VIEWED':
            return {...state, error: null};
        case 'REGISTER_REQUEST_SENT':
            return {...state, register: {...state.register, registerSent: true}};
        case 'WANT_REGISTER_PRESSED':
            return {...state, register: {...state.register, formRequested: true}};
        case 'REGISTER_SUCCESS':
            return {...state, register: {...state.register, registerSent: false, formRequested: false}};
        case 'REGISTER_ERROR':
            return {...state, register: {...state.register, registerSent: false}, error: action.payload};
        case 'LOGIN_USERNAME_CHANGED':
            return {
                ...state,
                login: {
                    ...state.login,
                    credentials: {
                        ...state.login.credentials,
                        username: action.payload
                    }
                }
            };
        case 'LOGIN_PASSWORD_CHANGED':
            return {
                ...state,
                login: {
                    ...state.login,
                    credentials: {
                        ...state.login.credentials,
                        password: action.payload
                    }
                }
            };
        case 'WANT_LOGIN_PRESSED':
            return {...state, login: {...state.login, formRequested: true}};
        case 'LOGIN_REQUEST_SENT':
            return {...state, login: {...state.login, loginSent: true}};
        case 'LOGIN_SUCCESS':
            return {...state, login: {...state.login, loginSent: false, formRequested: false}};
        case 'LOGIN_ERROR':
            return {...state, login: {...state.login, loginSent: false}, error: action.payload};
        default:
            return state;
    }
};