import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

export const notify=(taskName)=>{
    toast.info(`Hi There!!! You had set a remainder for ${taskName}`,
    {position:toast.POSITION.TOP_RIGHT,
    autoClose:false
    })
    var audio = new Audio(
        'https://www.fesliyanstudios.com/play-mp3/4384');
                    audio.play();
}