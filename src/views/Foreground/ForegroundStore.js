import { observable, action, makeObservable } from 'mobx'

class ForegroundStore {
  constructor () {
    // should be called in mobx 6.0
    makeObservable(this)
  }

    @observable name
    @observable showLoading = false

    @action toggleLoading (loading) {
      this.showLoading = loading
    }
}
export default ForegroundStore
