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
}

export default BlogModules
