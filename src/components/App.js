import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import Main from './Main'

function mapStateToProps(state) {
    console.log('inside mapStateToProps')
    
    return {
        logs: state.logs,
        inventory: state.inventory
    }
}


function mapDispachToProps(dispatch) {
    console.log('inside mapDispachToProps')
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;