const postPath = "./assets/posts/"
const maximumOpenedTabs = 6

class App extends React.Component {
    state = {
        currentTab: 1,
        openedTabs: [
            {
                title: "Main",
                id: 1,
                content: [],
            }
        ],
        highestTabIdAssigned: 1,
    };

    handlePostLinkClick = (postData) => {
        if (this.state.openedTabs.length >= maximumOpenedTabs) {
            alert("You have to close one tab in order to open a new tab"); 
            return;
        }
        //to be changed

        fetch(postPath + postData.title + ".md")
        .then(reponse => reponse.text())
        .then(reponse => {
                this.setState(prevState => {
                const stateCopy = Object.assign({}, prevState);
                stateCopy.currentTab = ++stateCopy.highestTabIdAssigned;
                stateCopy.openedTabs.push({
                    title: postData.title,
                    meta: {
                        writtenOn: postData.writtenOn
                    },
                    id: stateCopy.highestTabIdAssigned,
                    content: reponse, 
                });
                return stateCopy;
            });
        })
        .catch(error => console.log("Error while fetching post: ", error));
    }

    handleTabButtonClick = (tabId) => {
        this.setState({
            currentTab: tabId
        });
    }

    handleTabButtonClose = (tabId) => {
        this.setState(prevState => {
            const tabPosInArray = prevState.openedTabs.findIndex(tab => tab.id === tabId);
            if (tabPosInArray === -1)
                return prevState;
            const stateCopy = Object.assign({}, prevState);
            if (tabId === stateCopy.currentTab)
                stateCopy.currentTab = 1;
            stateCopy.openedTabs.splice(tabPosInArray, 1);
            return stateCopy;
        })
    }

    componentDidMount() {
        fetch("./assets/data.json")
            .then(reponse => reponse.json())
            .then(reponse => this.setState({
                currentTab: 1,
                highestTabIdAssigned: 1,
                openedTabs: [
                    {
                        title: "Main",
                        id: 1,
                        content: reponse,
                    }
                ],
            }));
    }

    render() {
        return ( 
            <>
                <Header>
                    <h1> Welcome to my blog! </h1>
                    <p> This is my writing place! I will write some random things in here!!</p>
                </Header>
                <TabbedSection currentTab={this.state.currentTab}
                               openedTabs={this.state.openedTabs}
                               handlePostLinkClick={this.handlePostLinkClick}
                               handleTabButtonClick={this.handleTabButtonClick}
                               handleTabButtonClose={this.handleTabButtonClose}
                />
            </>
        );
    }
};

class TabbedSection extends React.Component {
    render() {
        const currentTabData = this.props.openedTabs.find(tab => tab.id === this.props.currentTab);
        return (
            <>
                <TabBar currentTab={this.props.currentTab}
                        openedTabs={this.props.openedTabs}
                        handleTabButtonClick={this.props.handleTabButtonClick}
                        handleTabButtonClose={this.props.handleTabButtonClose}
                />
                <TabbedContent tabData={currentTabData}
                               handlePostLinkClick={this.props.handlePostLinkClick}
                />
            </>
        );
    }
};

class TabBar extends React.Component {
    render() {
        const tabs = this.props.openedTabs.map(
            tab => <TabButton key={tab.id} 
                              title={tab.title}
                              id={tab.id}
                              isClosable={tab.id !== 1}
                              onFocus={this.props.currentTab === tab.id}
                              handleTabButtonClick={this.props.handleTabButtonClick}
                              handleTabButtonClose={this.props.handleTabButtonClose}
                    />
        );
        return (
            <div className="row bg-primary">
                {tabs}
            </div>
        );
    }
}

class TabButton extends React.Component {
    handleTabButtonClick = (e) => {
        this.props.handleTabButtonClick(this.props.id);
    } 
    handleTabButtonClose = (e) => {
        this.props.handleTabButtonClose(this.props.id);
    }
    render() {
        const tabStyle = "overflow-hidden btn col-2 " + (this.props.onFocus ? "btn-light" : "btn-secondary text-white");
        return (
            <a className="btn btn-light" className={tabStyle} style={{height: "2.2em"}}> 
                {this.props.isClosable && <button className="close" onClick={this.handleTabButtonClose}>&times;</button>} <div onClick={this.handleTabButtonClick}>{this.props.title}</div>
            </a>
        );
    }
}

class TabbedContent extends React.Component {
    render() {
        const contentElem = (this.props.tabData.id === 1) ? 
                <MainContent tabData={this.props.tabData}
                             handlePostLinkClick={this.props.handlePostLinkClick}
                /> : <PostContent tabData={this.props.tabData}/>;
        return (
            <div className="pt-3">
                <div className="container">
                    {contentElem}
                </div>
            </div> 
        )
    }
}


class PostContent extends React.Component {
    render() {
        return (
            <article dangerouslySetInnerHTML={{__html: marked.parse(this.props.tabData.content)}}>
            </article>
        )
    }
}

class MainContent extends React.Component {
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
                <p className="card-header" data-toggle="collapse" href={"#" + this.props.data.category}> 
                    {this.props.data.category} <span className="badge badge-pill badge-primary">{this.props.data.posts.length}</span>
                </p>
                <div className="card-body collapse" id={this.props.data.category}>
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
                                    <PostLink postData={post} 
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
        this.props.handlePostLinkClick(this.props.postData);
    }
    render() {
        const tags = this.props.postData.tags.map(tag => <span key={tag}> <span className="badge badge-pill badge-info"> {tag} </span> </span>);
        return (
            <p><a href="#" className="link-primary" onClick={this.handlePostLinkClick}>{this.props.postData.title}</a> {tags}</p>
        );
    }   
}

function Header(props) {
    return (
        <header className="jumbotron bg-primary text-white mb-0 rounded-0">
            {props.children}           
        </header>
    )
}

export default App;