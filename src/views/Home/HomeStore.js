import { random } from 'lodash'
import { observable, action, makeObservable } from 'mobx'
import BlogModules from '../../api/BlogModules'

class HomeStore {
  constructor (props) {
    makeObservable(this)
    this.history = props.history
  }

    @observable blogs = []

    @action initStore () {
      // this.getBlogs()
    }

    @action async getBlogs () {
      this.blogs = await BlogModules.getBlogs()
      console.log(this.blogs)
    }

    @action addBlog () {
      const tmp = this.blogs.concat([])
      tmp.push(this.generateBlog())
      this.blogs = tmp
      console.log(this.blogs)
    }

    generateBlog () {
      return {
        name: 'Tom',
        age: parseInt(Math.random() * 10),
        content: 'This is blog',
        id: random(100)
      }
    }

    onClickBlog () {
      this.history.push('/detail')
    }
}

export default HomeStore
