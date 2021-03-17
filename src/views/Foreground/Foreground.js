import { Layout, Spin } from 'antd'
import './Foreground.scss'
import EmailRoutes from './EmailRoutes'
import { observer, Provider } from 'mobx-react'
import ForegroundStore from './ForegroundStore'

const { Header, Content } = Layout

class Foreground extends React.Component {
  constructor (props) {
    super(props)
    this.store = new ForegroundStore()
  }

  UNSAFE_componentWillMount(){
  }

  UNSAFE_componentWillReceiveProps(newProps){
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    return (
      <Provider appStore={this.store}>
        <Spin spinning={this.store.showLoading}>
          <Layout className='foreground-view' style={{ height: '100%' }}>
           
              <Header className='header'>
               <p>This is header</p>
              </Header>
            <Layout>

              <Content
                className='body-container'
                style={{
                  background: '#fff',
                  height: 'calc(100%)',
                  overflow: 'auto'
                }}
              >
                <EmailRoutes {...this.props} />
              </Content>
            </Layout>
          </Layout>
        </Spin>
      </Provider>
    )
  }
}
export default observer(Foreground)
