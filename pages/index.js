import { useEffect, useState } from 'react';
import * as echarts from 'echarts';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes, setLikes] = useState(0);


  useEffect(()=>{
    console.log("44444");
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;
    
    option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };
    
    option && myChart.setOption(option);
  })

  useEffect(()=>()=>{
    console.log("6666");

  })


  useEffect(()=>{
    console.log("5555");

  },[])

  console.log("11111");
  function handleClick() {
    setLikes(likes + 1);
    console.log("2222");
  }
  console.log("33333");


  return (
    <div >
      <div id="main" style={{ width: 400, height: 400 }}></div>

    </div>
  );
}