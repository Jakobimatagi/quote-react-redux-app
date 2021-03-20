import axios from 'axios';

export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE";


export const getQuote = () => (dispatch) => {
    // update state to loading
    dispatch({type: FETCHING_QUOTE_START})
    // start api fetch
    axios.get("https://api.quotable.io/random")
    .then(res => {
        console.log(res.data)
        dispatch({type:FETCHING_QUOTE_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: FETCHING_QUOTE_FAILURE, payload: err})
    })
    // respond to happy or sad path, updating state

}