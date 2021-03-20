import { FETCHING_QUOTE_FAILURE, FETCHING_QUOTE_START, FETCHING_QUOTE_SUCCESS } from "../actions"

const initialState = {
    loading: false,
    error: '',
    quote: '',
    firstName: '',
}


export const appReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCHING_QUOTE_START:
            return {...state, loading: true}
        case FETCHING_QUOTE_SUCCESS:
            return {...state, loading: false, quote: action.payload.content, firstName: action.payload.author}
        case FETCHING_QUOTE_FAILURE:
            return {...state, loading: false, error: "Request has failed!"}
        default:
            return state;

    }
}