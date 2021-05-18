import { observer } from 'mobx-react'
import { Button, List, Avatar } from 'antd'
import HomeStore from './HomeStore'
import {
  UserOutlined,
  StarOutlined,
  LikeOutlined,
  MessageOutlined
} from '@ant-design/icons'
import NewBlogModal from '../Modals/NewBlogModal'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.store = new HomeStore(props)
  }

  componentDidMount () {
    this.store.initStore()
  }

  renderListItem (listData) {
    return (
      <List
        itemLayout='vertical'
        size='large'
        pagination={{
          onChange: page => {
            console.log('TODO')
          },
          pageSize: 20
        }}
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <span key='action-1'><StarOutlined style={{ marginRight: 8 }} key='list-vertical-star-o' />112</span>,
              <span key='action-2'><LikeOutlined style={{ marginRight: 8 }} key='list-vertical-like-o' />123</span>,
              <span key='action-3'><MessageOutlined style={{ marginRight: 8 }} key='list-vertical-message' />2</span>
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar icon={<UserOutlined />} />}
              title={<a href={`/#/detail?id=${item.id}`}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    )
  }

  render () {
    return (
      <div>
        <Button onClick={() => this.store.addBlog()}>添加新blog</Button>
        {this.renderListItem(this.store.blogs)}
        <NewBlogModal visible={this.store.newBlogVisible} onCancel={() => this.store.toggleModal('newBlogVisible', false) }/>
      </div>
    )
  }
}
export default observer(Home)
