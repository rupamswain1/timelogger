import React from 'react';
import {useSelector} from 'react-redux';
import {Line} from 'react-chartjs-2';
import './TimeTrackLineChart.style.scss' 

const TimeTrackerLineChart=()=>{
    const {key,data}=useSelector(state=>state.SubmitDataReducer);
    let dataLine=null;
    //onst TotalTimeReducer=useSelector(state=>state.TotalTimeReducer);
    let display=false;
    if(Object.keys(data).length>0 && Object.keys(data[key]).length>0) {      
      let xAxis=[];
      //console.log(data[key]);
      //console.log(Object.keys(data[key]).length)
      let dataSet=[];
      var originalTimeData={
          label:'Estimated Time',
          data:[],
          fill:false,
          borderColor:'rgb(93, 66, 245)',
          tension:0.1
      }
      var TotalTimeData={
        label:'Actual Time',
        data:[],
        fill:false,
        borderColor:'rgb(245, 5, 25)',
        tension:0.1
    }
      if(Object.keys(data).length>0){
      
      for(var k in data){
          
          xAxis.push(data[k].date)
          
          var keyLocal=data[k].totalTimeData.key
         
           for(var origTimeKey in data[k]['totalTimeData'].originalTime[keyLocal]){
             originalTimeData.data.push((data[k].totalTimeData.originalTime[keyLocal][origTimeKey]/3600).toFixed(3))
           }
           for(var totalTimeKey in data[k].totalTimeData.totalTime[keyLocal]){
                //console.log(data[k].totalTimeData.totalTime[keyLocal][totalTimeKey])
               var actualTime=0;
             if(data[k].totalTimeData.totalTime[keyLocal][totalTimeKey]<0){
                 actualTime=(-1*data[k].totalTimeData.totalTime[keyLocal][totalTimeKey])+data[k].totalTimeData.originalTime[keyLocal][totalTimeKey]
             }
              else{
              actualTime=data[k].totalTimeData.originalTime[keyLocal][totalTimeKey]-data[k].totalTimeData.totalTime[keyLocal][totalTimeKey]
              }
             TotalTimeData.data.push((actualTime/3600).toFixed(3))
           }
       }
      dataSet=[originalTimeData,TotalTimeData]
      //console.log(dataSet)
   
      display=true
    }
    const labels=xAxis;
    dataLine = {
      labels: labels,
      datasets: dataSet
    };

  }
    return(
        <div className={`timeConparisonBarLineContainer-${display?'':'hidelineChartContainer'}`}>
            {Object.keys(data).length>0 && Object.keys(data[key]).length>0?
            <Line className='lineChart' data={dataLine}/>
            :''}
        </div>
    )
}

export default TimeTrackerLineChart;
