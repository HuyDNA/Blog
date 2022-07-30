/* This module contains:
        Components for rendering the main page.
*/

import { Link } from "./basic.js"
class MainPage extends React.Component {
    render() {
        return (
            this.props.tabData.content.map(categoryData => 
                <CategoryPostSection key={categoryData.category} data={categoryData}
                                     handlePostLinkClick={this.props.handlePostLinkClick}
                />
            )
        );
    }
};

class CategoryPostSection extends React.Component {
    render() {
        return (
            <div className="card">
                <p className="card-header"> 
                    {this.props.data.category} <span className="badge badge-pill badge-primary">{this.props.data.posts.length}</span>
                </p>
                <div className="card-body">
                    {
                        <CategoryPostList posts={this.props.data.posts} 
                                          handlePostLinkClick={this.props.handlePostLinkClick}/>
                    }
                </div>
            </div>
        );
    }
};

class CategoryPostList extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.posts.map(
                        post => <li key={post.title}>
                                    <PostLink postInfo={post} 
                                              handlePostLinkClick={this.props.handlePostLinkClick}/>
                                </li>    
                    )
                }
            </ul>
        );
    }
}

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
            <p> <Link handleLinkClick={this.handlePostLinkClick}>{this.props.postInfo.title}</Link> {tags}</p>
        );
    }   
}

export default MainPage;