import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const OnlyAuth = props => {
    const { isPingDone, isLogged } = props;
    if (!isPingDone) {
        return <div />;
    }

    if (!isLogged) {
        return <Redirect to={`/`} />;
    }

    return <React.Fragment>{props.children}</React.Fragment>;
};

function mapStateToProps(state) {
    return {
        isPingDone: state.user,
        isLogged: state.user && state.user.isLogged
    };
}

export default connect(mapStateToProps)(OnlyAuth);
