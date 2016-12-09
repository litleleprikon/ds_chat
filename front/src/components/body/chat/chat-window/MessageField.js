import React from 'react';
import {connect} from 'react-redux';

const MessageField = ({onKeyDown, onChange, username, currentMessage}) => {
    return (
        <div>
            <textarea onChange={onChange} value={currentMessage}
                      onKeyDown={(e) => onKeyDown(e, username)} className="form-control" rows="3"/>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        onKeyDown: (e, username) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                dispatch({
                    type: 'NEW_MESSAGE',
                    payload: {time: new Date().getTime(), username: username}
                });
            }
        },
        onChange: (e) => {
            dispatch({type: 'MESSAGE_CHANGED', payload: e.target.value});
        }
    }
};


export default connect((store) => ({...store.chat, username: store.user.username}), mapDispatchToProps)(MessageField);