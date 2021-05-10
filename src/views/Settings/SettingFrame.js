import { Layout, Menu, Button} from 'antd'
import { Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'
const TagSetting = loadable(() => import('./TagSetting/TagSetting'))
const PersonalSetting = loadable(() => import('./PersonalSetting/PersonalSetting'))


const { Sider, Content } = Layout
const MenuItem = Menu.Item
function SettingFrame(props) {
    const path = props.match.path
    console.log(path)

    return <div>
        <Sider>
            <Menu>
                <MenuItem key="personal settings">
                    <Button type="Link" href="/#/settings/personalSettings">
                        Personal Settings
                    </Button>
                </MenuItem>

                <MenuItem key="tag settings">
                    <Button type="Link" href="/#/settings/tagSettings">
                        Tag Settings
                    </Button>
                </MenuItem>
            </Menu>
        </Sider>
        <Content>
            <Switch>
                <Route path={`${path}settings/tagSettings`}>
                    <TagSetting {...props} />
                </Route>
                <Route path={`${path}settings/personalSettings`}>
                    <PersonalSetting {...props} />
                </Route>
                <Route path={path}>
                    <TagSetting {...props} />
                </Route>
            </Switch>
        </Content>
    </div>
}
export default SettingFrame