import HttpHelper from '../utils/httpHelper'

class BlogModules {
  static getBlogs () {
    const url = '/blog/list'
    return HttpHelper.REQUEST(url, {}, 'get').then(res => {
      if (res) {
        return res
      } else {
        return []
      }
    })
  }

  static newBlog (newBlog) {
    const url = '/blog/new'
    return HttpHelper.REQUEST(url, newBlog, 'post').then(res => {
      return !!res
    })
  }
}

export default BlogModules
