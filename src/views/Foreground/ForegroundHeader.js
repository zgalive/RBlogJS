import { Button } from 'antd'
import './ForegroundHeader.scss'

function ForegroundHeader () {
  return (
    <div className='foreground-header'>
      <Button ghost href='/#/'>Home</Button>
      <Button ghost href='/#/settings'>Settings</Button>
      <Button ghost href='/#/about'>About</Button>
    </div>
  )
}

export default ForegroundHeader
