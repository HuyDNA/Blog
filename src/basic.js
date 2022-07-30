/*This module contains:
    The most basic components    
*/

class Link extends React.Component {
    render() {
        return (
            <a href="#" className="link-primary" onClick={this.props.handleLinkClick}>{this.props.children}</a>
        );
    }
}

export { Link };