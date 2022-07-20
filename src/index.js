const root = ReactDOM.createRoot(document.getElementById("content"));

class App extends React.Component {
    state = {
        "data": []
    };

    componentDidMount() {
        fetch("data.json").then(reponse => reponse.json()).then(reponse => this.setState({"data": reponse}));
    }

    render() {
        return ( 
            <React.Fragment>
                <Header/>
                <div className="container">
                    <PostSection data={this.state.data}/>
                </div>
            </React.Fragment>
        );
    }
};

class PostSection extends React.Component {
    render() {
        return (
            this.props.data.map(categoryData => <CategoryPostSection key={categoryData.category} data={categoryData}/>)
        );
    }
};

class CategoryPostSection extends React.Component {
    render() {
        return (
            <div className="card">
                <p className="card-header"> 
                    <a className="text-decoration-none" data-toggle="collapse" href={"#" + this.props.data.category}>{this.props.data.category} </a> <span className="badge badge-pill badge-primary">{this.props.data.posts.length}</span>
                </p>
                <div className="card-body collapse" id={this.props.data.category}>
                    {<CategoryPostList posts={this.props.data.posts}/>}
                </div>
            </div>
        );
    }
};

class CategoryPostList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.posts.map(post => <li><PostLink key={post.title} postData={post}/></li>)}
            </ul>
        );
    }
}

class PostLink extends React.Component {
    render() {
        const tags = this.props.postData.tags.map(tag => <span> <span className="badge badge-pill badge-info"> {tag} </span> </span>);
        const id = this.props.postData.title.replace(/[\s'&()\?]/g, '');
        return (
            <>
                <p><a data-toggle="collapse" href={"#" + id}>{this.props.postData.title}</a> {tags}</p>
                <div className="collapse" id={id}>
                    <article>
                        <h2>{this.props.postData.title}</h2>
                        <p>Created on: {this.props.postData.writtenOn}</p>
                    </article>
                </div>
            </>
        );
    }   
}

function Header(props) {
    return (
        <header className="jumbotron bg-primary text-white">
                    <h1> Welcome to my blog! </h1>
                    <p> This is my writing place! I will write some random things in here!!</p>
        </header>
    )
}

root.render(<App/>)