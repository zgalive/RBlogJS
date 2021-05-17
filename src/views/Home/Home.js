import { observer } from 'mobx-react'
import { Button } from 'antd'
import HomeStore from './HomeStore'

// import { useEffect, useState } from "react";
class Home extends React.Component {
  constructor (props) {
    super(props)
    this.store = new HomeStore(props)
    console.log(props)
  }

  componentDidMount () {
    this.store.initStore()
  }

  render () {
    console.log('render')
    return (
      <div>
        {
                    this.store.blogs.map(x => {
                      return (
                        <div key={x.id} onClick={() => this.store.onClickBlog()}>
                          <p>Name: {x.name}</p>
                          <p>Age: {x.age}</p>
                          <article>{x.content}</article>
                        </div>
                      )
                    })
                }
        <div style={{ display: 'none' }}>{this.store.blogs.length}</div>
        <Button onClick={() => this.store.addBlog()}>添加新blog</Button>
        <div>测试自动部署</div>
      </div>
    )
  }
}
export default observer(Home)
