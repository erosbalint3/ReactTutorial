import React from 'react';
import PropTypes from 'prop-types';

function Greeter(props: any) {
    return <h1>Hello, {props.first}</h1>;
}

export default Greeter;