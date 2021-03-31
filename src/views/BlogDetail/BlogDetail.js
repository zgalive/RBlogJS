import { observer } from "mobx-react"
import BlogDetailStore from './BlogDetailStore'

class BlogDetail extends React.Component{
    constructor(props){
        super(props)
        this.store = new BlogDetailStore()
    }
}
export default observer(BlogDetail)