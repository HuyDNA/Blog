/*This module contains:
    Components for rendering pages containing posts' content.
*/

class PostPage extends React.Component {
    render() {
        return (
            <article dangerouslySetInnerHTML={{__html: marked.parse(this.props.tabData.content)}}>
            </article>
        )
    }
}

export default PostPage;