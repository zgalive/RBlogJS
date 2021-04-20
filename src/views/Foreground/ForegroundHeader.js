import {Button} from 'antd'
import './ForegroundHeader.scss'

function ForegroundHeader(){
    return <div className="foreground-header">
        <Button ghost>Home</Button>
        <Button ghost>Settings</Button>
        <Button ghost>About</Button>
    </div>
}

export default ForegroundHeader