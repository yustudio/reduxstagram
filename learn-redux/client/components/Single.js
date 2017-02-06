import React from 'react';
import Photo from './Photo';  // reuse Photo used in PhotoGrid
import Comments from './Comments';

const Single = React.createClass({
	render() {
		const { postId } = this.props.params;

		const i = this.props.posts.findIndex((post)=>
			post.code === postId);
		const post = this.props.posts[i];
		const postComments = this.props.comments[postId] || [];

		// console.log("postId is: ", this.props.params.postId);
		// console.log(JSON.stringify(post, null, 2));

		return (
			<div className="single-photo">
				<Photo i={i} post={post} {...this.props} />
				<Comments postComments={postComments} {...this.props}/>
			</div>
		)
	}
})

export default Single;