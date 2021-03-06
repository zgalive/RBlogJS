import { Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'
import { observer } from 'mobx-react'

const Home = loadable(() => import('./Home/Home'))
const BlogDetail = loadable(()=> import('./BlogDetail/BlogDetail'))


class EmailRoutes extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const path = this.props.match.path
    return (
      <Switch>
        <Route path={`${path}home`}>  
          <Home {...this.props} />
        </Route>
        <Route path={`${path}home`}>
          <BlogDetail {...this.props}/>
        </Route>
        <Route path={path}>
          <Home {...this.props} />
        </Route>
      </Switch>
    )
  }
}
export default observer(EmailRoutes)
