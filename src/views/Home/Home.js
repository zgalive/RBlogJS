import { observer } from "mobx-react";
import {Button} from "antd"
import HomeStore from './HomeStore';

class Home extends React.Component{
    constructor(props){
        super(props)
        this.store = new HomeStore()
    }

    render(){
        console.log('render')
        return (
        <div>
            {
                this.store.blogs.map(x=>{
                    return <div onClick={()=>}>
                        <p>Name: {x.name}</p>
                        <p>Age: {x.age}</p>
                        <article>{x.content}</article>
                    </div>
                })
            }
            <div style={{display: 'none'}}>{this.store.blogs.length}</div>
            <Button onClick={()=>this.store.addBlog()}>添加新blog</Button>
        </div>)
    }
}
export default observer(Home)