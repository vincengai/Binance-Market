// import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

// const predefinedState = { id: null }

// const sessionReducer = (oldState = predefinedState, action) => {
//     Object.freeze(oldState);

//     switch (action.type) {
//         case RECEIVE_CURRENT_USER:
//             return { id: action.user.id }

//         case LOGOUT_CURRENT_USER:
//             return { id: null }

//         default:
//             return oldState;
//     };
// };

// export default sessionReducer;


import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser_id };
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return state;
    }
};

export default sessionReducer;
