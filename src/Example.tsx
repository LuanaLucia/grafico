import React from "react";
import { Line, ComposedChart, Scatter, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Dot } from 'recharts';



const data = [
  {
    cuotas: 0,
    uv: 0,
    amt: 0
  },
  {
    cuotas: 1,
    uv: 5000,
    amt: 5000
  },
  {
    cuotas: 10,
    uv: 4500,
    amt: 4500
  },
  {
    cuotas: 20,
    uv: 4000,
    amt: 4000
  },
  {
    cuotas: 30,
    uv: 3500,
    amt: 3500
  },
  {
    cuotas: 40,
    uv: 3000,
    amt: 3000
  },
  {
    cuotas: 50,
    un: 2500,
    amt: 2500
  },
  {
    cuotas: 51,
    un: 2500,
    amt: 2500
  },
  {
    cuotas: 60,
    uv: 2000,
    amt: 2000
  }
];

export default function Example() {
  return (
    <ComposedChart width={700} height={300} data={data}>
      <CartesianGrid strokeDasharray="1 2" vertical={false} />
      <XAxis type="number" dataKey="cuotas" domain={[0, 120]} tickCount={13}  />
      <YAxis />
      <defs>
        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0032e6" stopOpacity={0.08} />
          <stop offset="100%" stopColor="#1bb3bc" stopOpacity={0} />
        </linearGradient>
      </defs>
      <Tooltip />
      <Legend
        iconType="circle"
        iconSize={10}
      />
      <Area dataKey="amt" stroke="#36f" strokeWidth={2} fill="url(#colorGradient)" fillOpacity={1} activeDot={{ r: 8 }}/>
      <Scatter name="A school" dataKey="uv" shape="circle" stroke="#36f" fill="#fff" />
      <Scatter name="B school" dataKey="un" shape="circle" stroke="#fc3" fill="#fff" />
    </ComposedChart>
  );
}