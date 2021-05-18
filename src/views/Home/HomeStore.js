import { observable, action, makeObservable } from 'mobx'
import BlogModules from '../../api/BlogModules'

class HomeStore {
  constructor (props) {
    makeObservable(this)
    this.history = props.history
  }

    @observable blogs = []
    @observable newBlogVisible = false

    @action initStore () {
      // this.getBlogs()
    }

    @action async getBlogs () {
      this.blogs = await BlogModules.getBlogs()
    }

    @action addBlog () {
      this.newBlogVisible = true
    }

    onClickBlog () {
      this.history.push('/detail')
    }

    @action toggleModal (modalName, visible) {
      this[modalName] = visible
    }
}

export default HomeStore
