import TagSettingStore from './TagSettingStore'

class TagSetting extends React.Component {
  constructor (props) {
    super(props)
    this.store = new TagSettingStore()
  }

  render () {
    return <div>tag setting</div>
  }
}

export default TagSetting
