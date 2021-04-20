import { observer } from "mobx-react";
import {Button} from "antd"
import HomeStore from './HomeStore';
// import { useEffect, useState } from "react";
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
                    return <div>
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

// function Home(props){
//     let [count, setCount] = useState(0)

//     useEffect(() => {
//         // 使用浏览器的 API 更新页面标题
//         document.title = `You clicked ${count} times`;
//     });

//     return <div>
//         {count}
//         <Button onClick={()=>setCount(count+1)}>增加</Button>
//     </div>
// }
// export default Home