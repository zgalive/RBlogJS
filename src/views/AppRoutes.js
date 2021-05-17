import { Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'

const Home = loadable(() => import('./Home/Home'))
const BlogDetail = loadable(() => import('./BlogDetail/BlogDetail'))
const SettingFrame = loadable(() => import('./Settings/SettingFrame'))

export default function EmailRoutes (props) {
  const path = props.match.path
  return (
    <Switch>
      <Route path={`${path}home`}>
        <Home {...props} />
      </Route>
      <Route path={`${path}detail`}>
        <BlogDetail {...props} />
      </Route>
      <Route path={`${path}settings`}>
        <SettingFrame {...props} />
      </Route>
      <Route path={path}>
        <Home {...props} />
      </Route>
    </Switch>
  )
}
