import insta from './icons/insta.png'
import camera from './icons/camera.png'

const Header = () =>{
    return(
        <div className='doc-head'>
        <div className='logo'>
            <span><img className='insta-pic' src={insta}/></span>
            <span><h2 className='insta-text'>Instagram</h2></span>
        </div>
        <div><span><img className='camera-pic' src={camera}/></span> </div>
        </div>
    )
}
export default Header