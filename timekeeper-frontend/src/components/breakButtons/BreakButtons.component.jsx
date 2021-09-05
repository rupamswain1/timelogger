import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CallIcon from '@material-ui/icons/Call';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import EjectIcon from '@material-ui/icons/Eject';
import './BreakButtons.style.scss';
import Tooltip from '@material-ui/core/Tooltip';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import {startBreak} from '../../redux/breakButton/BreakButton.action';
const BreakButtons=()=>{

    const breakData=useSelector(state=>state.BreakButtonReducer);
    const totalTimeReducer=useSelector(state=>state.TotalTimeReducer);
    const totalTimeKey=totalTimeReducer.key;
    const {totalTime}=totalTimeReducer;
    const dispatch=useDispatch();
    //('call')

    const dispatchAction=(buttonName)=>{
        
        dispatch(startBreak(buttonName))
    }
    return(
        
        <div className='breakbuttonsMainContainer'>
        {totalTime[totalTimeKey]?
            <div>
            <Tooltip title='Instagram'>
                <button className={`brakButton-insta-${breakData['instagram'].isActive?'active':''}`} onClick={()=>dispatchAction('instagram')}><InstagramIcon style={{fill: "white"}} fontSize="large" /></button>
            </Tooltip>
            <Tooltip title='Facebook'>
                <button className={`brakButton-fb-${breakData['faceBook'].isActive?'active':''}`} onClick={()=>dispatchAction('faceBook')}><FacebookIcon style={{fill: "white"}} fontSize="large" /></button>
            </Tooltip>
            
            <Tooltip title='Youtube'>
                <button className={`brakButton-youtube-${breakData['youtube'].isActive?'active':''}`} onClick={()=>dispatchAction('youtube')}><YouTubeIcon style={{fill: "white"}} fontSize="large"/></button>
            </Tooltip>
           
            <Tooltip title='Calls'>
                <button className={`brakButton-calls-${breakData['call'].isActive?'active':''}`} onClick={()=>dispatchAction('call')}><CallIcon style={{fill: "white"}} fontSize="large"/></button>
            </Tooltip>
            
            <Tooltip title='Messaging'>
                <button className={`brakButton-messaging-${breakData['messaging'].isActive?'active':''}`} onClick={()=>dispatchAction('messaging')}><WhatsAppIcon style={{fill: "white"}} fontSize="large" /></button>
            </Tooltip>
            

            <Tooltip title='Sleep'>
                <button className={`brakButton-sleep-${breakData['sleep'].isActive?'active':''}`} onClick={()=>dispatchAction('sleep')}><AirlineSeatFlatIcon style={{fill: "white"}} fontSize="large"/></button>
            </Tooltip>
            
            <Tooltip title='Excercise'>
                <button className={`brakButton-excesise-${breakData['excercise'].isActive?'active':''}`} onClick={()=>dispatchAction('excercise')}><DirectionsRunIcon style={{fill: "white"}} fontSize="large"/></button>
            </Tooltip>
           
            
            <Tooltip title='Food'>
            <button className={`brakButton-food-${breakData['food'].isActive?'active':''}`} onClick={()=>dispatchAction('food')}><FastfoodIcon style={{fill: "white"}} fontSize="large"/></button>
            </Tooltip>
            
            
            <Tooltip title='Tea/Coffee'>
                <button className={`brakButton-tea-${breakData['tea'].isActive?'active':''}`} onClick={()=>dispatchAction('tea')}><FreeBreakfastIcon style={{fill: "white"}} fontSize="large"/></button>
            </Tooltip>
           
            <Tooltip title='Miscelaneous Task'>
                <button className={`brakButton-misc-${breakData['miscelaneous'].isActive?'active':''}`} onClick={()=>dispatchAction('miscelaneous')}><LibraryAddIcon style={{fill: "white"}} fontSize="large"/></button>
            </Tooltip>

            <Tooltip title='Release All'>
                 <button className={`brakButton-eject-${breakData['releaseAll'].isActive?'active':''}`} onClick={()=>dispatchAction('releaseAll')}><EjectIcon style={{fill: "white"}} fontSize="large"/></button>
            </Tooltip>
            
            </div>:''}
        </div>
        )
}

export default BreakButtons;