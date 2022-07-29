const postPath = "./assets/posts/"
const maximumOpenedTabs = 6
const mainPath = "./assets/data.json"

import MainPage from "./mainPage.js"
import PostPage from "./postPage.js"
class App extends React.Component {
    state = {
        currentTab: 1,                 //current navigated tab's id
        openedTabs: [                  //list of opened tabs
            {
                title: "Main",
                id: 1,
                content: [],
            }
        ],
        highestTabIdAssigned: 1,       //id generator
                                       //increases every time a new tab is created and is assigned to that tab 
    };

    handlePostLinkClick = (postInfo) => {
        /*Handle clicks on post links in the Main page.
        Given,
            postInfo: containing the link-clicked post's metadata
        --------------------------------------------------------
        */
        
        //only up to 6 tabs supported
        //to be changed
        if (this.state.openedTabs.length >= maximumOpenedTabs) {
            alert("You have to close one tab in order to open a new tab"); 
            return;
        }

        //
        this.fetchPost(postInfo.title);
    }
    
    fetchPost(postTitle) {
        /*Fetch posts in markdown format located in postPath.
          Then updating App's state accordingly.
        Given,
            postTitle: the about-to-fetched post's title.
        Return,
            A promise.
        ---------------------------------------------------------
        */

        return fetch(postPath + postTitle + ".md")
        .then(reponse => reponse.text())
        .then(reponse => this.setState(prevState => {
                const stateCopy = Object.assign({}, prevState);
                stateCopy.currentTab = ++stateCopy.highestTabIdAssigned;
                stateCopy.openedTabs.push({
                    title: postTitle,
                    id: stateCopy.highestTabIdAssigned,
                    content: reponse, 
                });
                return stateCopy;
            })
        )
        .catch(error => console.log("Error while fetching post: ", error));
    }

    handleTabButtonClick = (tabId) => {
        /*Handle clicks on tab buttons.
        Given,
            tabId: the clicked tab's id.
        ---------------------------------------------------------
        */

        this.setState({
            currentTab: tabId
        });
    }

    handleTabButtonClose = (tabId) => {
        /*Handle clicks on tab buttons' close box.
        Given,
            tabId: the about-to-closed tab's id.
        ---------------------------------------------------------
        */

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
        /* After App is successfully mounted, the expected behaviour is:
            fetch data.json from mainPath to render the main page.
            fetch all posts whose titles are cached in localStorage.
                if fetching any one of these posts fail (maybe because it has been deleted),
                it will be ignored.
                if cached local state is corrupted, **MAYBE** it will just be ignored.
        --------------------------------------------------------
        */

        /*#########Cases that problems arise:
            - Cached local state is corrupted
        */

        fetch(mainPath)
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
        }))
        .then(reponse => {
            const cachedLocalState = JSON.parse(localStorage.getItem("localBlogStorage"));
            Promise.allSettled(
                cachedLocalState.openedPosts.map(postTitle => this.fetchPost(postTitle))
            ).then(reponse => this.setState({currentTab: cachedLocalState.currentPost}));
        })
        .catch(reason => console.log("componentDidMount: ", reason))
    }

    componentDidUpdate() {
        //Reparse Maths when display updated
        MathJax.Hub.Typeset();      

        //Cache the App's state (currently opened tabs and navigated tab) to localStorage
        //#################partial validity checking will be added later
        localStorage.setItem("localBlogStorage", JSON.stringify(this.getPostState()));
    }

    getPostState() {
        /* Return an object of the following form 
            {
                currentPost: <Number>
                openedPosts: [...<post's title>]
            }
        -------------------------------------------------------
        */

        const stateObj = {
            currentPost: 1,
            openedPosts: [],
        };

        this.state.openedTabs.forEach((tab, tabPosInArray) => {
            if (tab.id === 1) return;
            
            if (tab.id === this.state.currentTab)
                stateObj.currentPost = tabPosInArray + 1
            
            stateObj.openedPosts.push(tab.title)
        });

        return stateObj;
    }

    render() {
        return ( 
            <>
                <HeaderBox>
                    <h1> Welcome to my blog! </h1>
                    <p> This is my writing place! I will write some random things in here!!</p>
                </HeaderBox>
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
                <MainPage tabData={this.props.tabData}
                             handlePostLinkClick={this.props.handlePostLinkClick}
                /> : <PostPage tabData={this.props.tabData}/>;
        return (
            <div className="pt-3">
                <div className="container">
                    {contentElem}
                </div>
            </div> 
        )
    }
}






function HeaderBox(props) {
    return (
        <header className="jumbotron bg-primary text-white mb-0 rounded-0">
            {props.children}           
        </header>
    )
}

export default App;