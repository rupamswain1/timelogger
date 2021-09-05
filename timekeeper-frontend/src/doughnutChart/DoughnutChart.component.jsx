import React from 'react';
import {useSelector} from 'react-redux';
import {Doughnut} from 'react-chartjs-2';
import './DoughnutChart.style.scss';
const DoughnutChart=()=>{
    const {key,data}=useSelector(state=>state.SubmitDataReducer);
    let Doughnutdata={}
    let display=false;
    if(Object.keys(data).length>0 && Object.keys(data[key]).length>0) {
      let chartLabels=[];
      let taskHour=[];
      let bgColors=[]
      let borderColors=[]
      //console.log(data[key]);
      //console.log(Object.keys(data[key]).length)
      if(Object.keys(data).length>0){
      let obj=data[key].taskData;
      //console.log(obj)
      for(var k in obj){
          chartLabels.push(k.toUpperCase());
          
          taskHour.push(((obj[k].time)/3600).toFixed(4))
          bgColors.push(obj[k].color)
          borderColors.push('rgb(255,255,255)')
          }
      }
      //console.log(taskHour)
      //console.log(bgColors)
    
      Doughnutdata = {
          labels: chartLabels,
          datasets: [
            {
              label: '# of Votes',
              data: taskHour,
              backgroundColor: bgColors,
              borderColor: borderColors,
              borderWidth: 2,
              hoverOffset: 20
            },
          ],
      };
      display=true;
    }
    return(
        <div className={`doughnutChartContainer-${display?'':'hideBarDougnutContainer'}`}>
            {Object.keys(data).length>0 && Object.keys(data[key]).length>0?
            <Doughnut data={Doughnutdata}/>
            :''}
        </div>
    )
}

export default DoughnutChart;
