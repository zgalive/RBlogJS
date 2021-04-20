import axios from 'axios'

let token = Cookies.get('accessToken')? JSON.parse(Cookies.get('accessToken')) : {}
const userSessionKey = Cookies.get('userSessionKey')? Cookies.get('userSessionKey') : '' // not user_session_key，be careful
const timeZoneOffset = (new Date().getTimezoneOffset()/60)*-1
const instance = axios.create({
  baseURL: '',
  headers: {
    'user-session-key': userSessionKey,
    token: token.access_token,
    'time-zone': "GMT" + (timeZoneOffset > 0? `+${timeZoneOffset}` : timeZoneOffset)
  }
})

class HttpHelper {
    static REQUEST(url, params, type) {
        switch (type) {
            case 'get':
            case 'delete':
                return instance[type](url, { params }).then(res => {
                    if (!res) {
                        return null
                    }
                })
            case 'post':
            case 'put':
            default:
                return instance[type](url, params).then(res => {
                    if (!res) {
                        return null
                    }
                })
        }
    }

    static CUSTOMREQUEST(config) {
       
        return instance.request(config).then(res => {
            if (!res) {
                return null
            }
        })
    }
}
export default HttpHelper
