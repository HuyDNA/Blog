const root = ReactDOM.createRoot(document.getElementById("content"));

class App extends React.Component {
    render() {
        return ( 
            <Header/>
        );
    }
};

function Header(props) {
    return (
        <header className="container jumbotron bg-primary text-white">
                    <h1> Welcome to my blog! </h1>
                    <p>This is my writing place! I will write some random things in here!!</p>
        </header>
    )
}

root.render(<App/>)