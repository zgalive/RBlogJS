import { observable } from "mobx"

class HomeStore {
    @observable blogs = []

    @action addBlog(){
        let newBlog = this.generateBlog()
        this.blogs.push(newBlog)
    }

    generateBlog(){
        return {
            name: 'Tom',
            age: Math.random()*10,
            content: "This is blog"
        }
    }
}

export default HomeStore