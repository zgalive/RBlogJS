import { observable, action, makeObservable } from "mobx"
import BlogModules from "../../api/BlogModules"

class HomeStore {
    constructor(){
        makeObservable(this)
    }

    @observable blogs = []

    @action initStore(){
        this.getBlogs()
    }

    @action async getBlogs(){
        this.blogs = await BlogModules.getBlogs()
        console.log(this.blogs)
    }

    @action addBlog(){
        let tmp = this.blogs.concat([])
        tmp.push(this.generateBlog())
        this.blogs = tmp
        console.log(this.blogs)
    }

    generateBlog(){
        return {
            name: 'Tom',
            age: parseInt(Math.random()*10),
            content: "This is blog"
        }
    }
}

export default HomeStore