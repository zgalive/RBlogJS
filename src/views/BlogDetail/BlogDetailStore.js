const {observable, action, makeObservable } = require("mobx");

class BlogDetailStore{
    constructor(){
        makeObservable(this)
    }
}
export default BlogDetailStore