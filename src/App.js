import Foreground from './views/Foreground/Foreground'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import { Route, HashRouter } from 'react-router-dom'
// import { resourcesZh, resourcesEn } from './i18n/resources'

// const locales = {
//   'en-US': resourcesEn,
//  'zh-CN': resourcesZh
// }

// class App extends React.Component {
//   constructor (props) {
//     super(props)
//   }

//   // todo
//   UNSAFE_componentWillMount () {
//     // this.loadLocales('zh-CN')
//   }

//   // 加载语言位置
//   // loadLocales (language, needRefresh) {
//   //   if (intl.getInitOptions().currentLocale === null || language !== this.state.language) {
//   //     intl.init({
//   //       currentLocale: language, locales
//   //     })
//   //       .then(() => {
//   //         // this.setState({ 'language': language })
//   //         localStorage.setItem('language', language)
//   //         if (needRefresh) { location.reload() }
//   //       })
//   //   }
//   // }

//   render () {
//     return (
//       <ConfigProvider locale={zhCN}>
//         <HashRouter>
//           <Route path='/'>
//             <Foreground {...this.props}/>
//           </Route>
//         </HashRouter>
//       </ConfigProvider>
//     )
//   }
// }

// export default App

function App () {
  return (
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <Route path='/' component={Foreground} />
      </HashRouter>
    </ConfigProvider>
  )
}
export default App
