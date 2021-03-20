import React from 'react';
import {connect} from 'react-redux';
import {getQuote} from '../actions/index';
// import styled from 'styled-components';

const Quote = (props) => {
    

    return(
        <>
        <h2>
            Quote is: <br/>
            {props.quote}
        </h2>
        <h3>
            Quoted by: <br />
            {props.firstName}
        </h3>
     
        <button onClick={() => props.getQuote()}>Get Quote</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        quote: state.quote,
        loading: state.loading,
        error: state.error,
        firstName: state.firstName
    }
}
const mapDispatchToProps = {
    getQuote
}

export default connect(mapStateToProps, mapDispatchToProps) (Quote);

// const StyledDiv = styled.div`
// background-image: url("https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");


// `