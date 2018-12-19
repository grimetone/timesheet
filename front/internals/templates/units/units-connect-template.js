import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { App } from './interfaces';

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(_dispatch ) {
    return {};
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(App),
);
