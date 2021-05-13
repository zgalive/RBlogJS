import { action, makeObservable, observable } from 'mobx'

class TagSettingStore {
  constructor () {
    makeObservable(this)
    this.initStore()
  }

    @observable tagSettings = {}

    @action initStore () {

    }
}
export default TagSettingStore
