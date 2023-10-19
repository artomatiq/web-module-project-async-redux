export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const REMOVE_ACTIVITY = 'REMOVE_ACTIVITY';

export const addActivity = (activity) => {
    return {type: ADD_ACTIVITY, paylaod: activity}
}

export const removeActivity = (key) => {
    return {type: REMOVE_ACTIVITY, payload: key}
}