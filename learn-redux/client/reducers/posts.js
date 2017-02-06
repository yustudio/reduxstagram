// 1 reducers per state

// takes in action and copy of current state

// Pure function, not mutating external state. but rather makes a new obj
function posts(state = [], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES':
			const i = action.index;
			return [
			...state.slice(0,i),
			{...state[i], likes: state[i].likes + 1},
			...state.slice(i+1)
			]
		default:
			return state;
	}
	return state;
}

export default posts;
