import React from 'react'
import {Pie} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js'


ChartJS.register(
   ArcElement,
   Tooltip,
   Legend
)

export default function BarChart({barData,chartOpt}) {
    
  return (
   <Pie
   data={barData} 
   options={chartOpt}
   >

   </Pie>
  )
}
