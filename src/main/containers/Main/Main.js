import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {Main} from '../../components';

const mapStateToProps = ({main: {loading}} = {}) => ({
    loading
});

const connectedMain = connect(mapStateToProps)(Main);

export default withRouter(connectedMain);
