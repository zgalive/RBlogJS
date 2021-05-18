import { Input, Modal } from 'antd'
import { observer } from 'mobx-react'
import NewBlogModalStore from './NewBlogModalStore'

class NewBlogModal extends React.Component {
  constructor (props) {
    super(props)
    this.store = new NewBlogModalStore()
  }

  render () {
    return (
      <Modal
        visible={this.props.visible}
        title='New Blog'
        onOk={() => this.store.addNewBlog(this.props.onOk)}
        onCancel={this.props.onCancel}
      >
        <div>
          <span>标题</span>
          <Input value={this.store.title} onChange={e => this.store.onInputChange(e, 'title')} />
        </div>
        <div>
          <span>简介</span>
          <Input value={this.store.description} onChange={e => this.store.onInputChange(e, 'description')} />
        </div>
        <div>
          <span>内容</span>
          <Input.TextArea value={this.store.content} onChange={e => this.store.onInputChange(e, 'content')} />
        </div>
      </Modal>
    )
  }
}

export default observer(NewBlogModal)
