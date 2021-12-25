import React from 'react';
import {useSelector} from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement,BarElement,LineController, LineElement} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';


import './DoughnutChart.style.scss';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement,BarElement,LineController, LineElement);
const DoughnutChart=()=>{
    const {key,data}=useSelector(state=>state.SubmitDataReducer);
    let Doughnutdata={}
    let Options={}
    let display=false;
    if(Object.keys(data).length>0 && Object.keys(data[key]).length>0) {
      let chartLabels=[];
      let taskHour=[];
      let bgColors=[]
      let borderColors=[]

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
    
      Doughnutdata = {
          labels: chartLabels,
          datasets: [
            {
              label: 'Time Spent',
              data: taskHour,
              backgroundColor: bgColors,
              borderColor: borderColors,
              borderWidth: 2,
              hoverOffset: 20, 
            },
          ],
      };
      display=true;
      Options={
          responsive:true,
          maintainAspectRatio:false,
        }
      
    }
    return(
        <div className={`doughnutChartContainer-${display?'':'hideBarDougnutContainer'}`}>
            {Object.keys(data).length>0 && Object.keys(data[key]).length>0?
            <Doughnut data={Doughnutdata} options={Options} height={350}/>
            :''}
        </div>
    )
}

export default DoughnutChart;
