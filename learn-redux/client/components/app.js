import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Main from './Main';


function mapStateToProps(state) {
	return {
		posts: state.posts,
		comments: state.comments
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

// instaed of pass data via props through each level, use
// connect to get store state at component level where states are needed
const App = connect(
	mapStateToProps, 
	mapDispatchToProps)(Main);

export default App;