/*This module contains:
    The most basic components    
*/

class PostLink extends React.Component {
    /*Component representing links to posts.
    Expected props:
        postInfo: an object containing information about the associated post,
                    this object should have a field named "title"
        handlePostLinkClick: an event handler for handling clicks on the link.
    */

    handlePostLinkClick = (e) => {
        this.props.handlePostLinkClick(this.props.postInfo);
    }
    render() {
        const tags = this.props.postInfo.tags.map(tag => <span key={tag}> <span className="badge badge-pill badge-info"> {tag} </span> </span>);
        return (
            <p><a href="#" className="link-primary" onClick={this.handlePostLinkClick}>{this.props.postInfo.title}</a> {tags}</p>
        );
    }   
}

export { PostLink };