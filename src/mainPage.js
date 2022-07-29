/* This module contains:
        Components for rendering the main page.
*/

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

export default MainPage;