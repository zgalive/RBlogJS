import { observable, action, makeObservable } from "mobx"

class HomeStore {
    constructor(){
        makeObservable(this)
    }

    @observable blogs = []

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