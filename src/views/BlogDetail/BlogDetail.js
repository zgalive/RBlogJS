import { observer } from 'mobx-react'
import BlogDetailStore from './BlogDetailStore'

class BlogDetail extends React.Component {
  constructor (props) {
    super(props)
    this.store = new BlogDetailStore()
  }

  render () {
    return (
      <div>
        <h2>{this.store.blog.title}</h2>
        <span>{this.store.blog.owner}</span>
        <article>{this.store.blog.content}</article>
      </div>
    )
  }
}
export default observer(BlogDetail)
