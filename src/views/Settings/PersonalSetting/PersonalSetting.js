import PersonalSettingStore from './PersonalSettingStore'

class PersonalSetting extends React.Component {
  constructor (props) {
    super(props)
    this.store = new PersonalSettingStore()
  }

  render () {
    return <div>personal setting</div>
  }
}
export default PersonalSetting
