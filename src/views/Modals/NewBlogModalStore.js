import { notification } from 'antd'
import { makeObservable, observable } from 'mobx'
import BlogModules from '../../api/BlogModules'

class NewBlogModalStore {
  constructor () {
    makeObservable(this)
  }

    @observable title = ''
    @observable content = ''
    @observable description = ''

    addNewBlog (onOk) {
      const newBlog = {
        title: this.title,
        content: this.content,
        description: this.description
      }
      BlogModules.newBlog(newBlog).then(res => {
        if (res) {
          notification.success({ description: '添加成功' })
          if (onOk) onOk()
        }
      })
    }

    onInputChange (v, property) {
      v = v && v.target ? v.target.value : v
      this[property] = v
    }
}

export default NewBlogModalStore
