import { action, observable, makeObservable } from 'mobx'

class PersonalSettingStore {
  constructor () {
    makeObservable(this)
    this.initStore()
  }

    @observable personalSettings = {}

    @action initStore () {

    }
}
export default PersonalSettingStore
