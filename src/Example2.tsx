import React, { PureComponent } from "react";
import { Line, ComposedChart, Scatter, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Dot } from 'recharts';
import "./Example2.css"



const data = [
  {
    cuotas: 0,
    uv: 0,
    amt: 0,
    status: "pago"
  },
  {
    cuotas: 1,
    uv: 5000,
    amt: 5000,
    status: "pago"
  },
  {
    cuotas: 10,
    uv: 4500,
    amt: 4500,
    status: "pago"
  },
  {
    cuotas: 20,
    uv: 4000,
    amt: 4000,
    status: "pago"
  },
  {
    cuotas: 30,
    uv: 3500,
    amt: 3500,
    status: "pago"
  },
  {
    cuotas: 40,
    uv: 3000,
    amt: 3000,
    status: "pago"
  },
  {
    cuotas: 50,
    un: 2500,
    amt: 2500,
    status: "atrasado"
  },
  {
    cuotas: 51,
    un: 2500,
    amt: 2500,
    status: "atrasado"
  },
  {
    cuotas: 52,
    un: 2500,
    amt: 2500,
    status: "atrasado"
  },
  {
    cuotas: 53,
    un: 2500,
    amt: 2500,
    status: "atrasado"
  },
  {
    cuotas: 54,
    un: 2500,
    amt: 2500,
    status: "atrasado"
  },
  {
    cuotas: 55,
    un: 2500,
    amt: 2500,
    status: "atrasado"
  },
  {
    cuotas: 60,
    uv: 2000,
    amt: 2000,
    status: "pago"
  },
  {
    cuotas: 70,
    uv: 1500,
    amt: 1500,
    status: "pago"
  },
  {
    cuotas: 80,
    uv: 1000,
    amt: 1000,
    status: "pago"
  },
  {
    cuotas: 90,
    uv: 500,
    amt: 500,
    status: "pago"
  },
  {
    cuotas: 100,
    uv: 0,
    amt: 0,
    status: "finalizado"
  }
];

const CustomTooltip = ({ active, payload, label }: {
  active: any;
  payload: any;
  label: any;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};

const getIntroOfPage = (label) => {
  if (label === 'Page A') {
    return "Page A is about men's clothing";
  }
  if (label === 'Page B') {
    return "Page B is about women's dress";
  }
  if (label === 'Page C') {
    return "Page C is about women's bag";
  }
  if (label === 'Page D') {
    return 'Page D is about household goods';
  }
  if (label === 'Page E') {
    return 'Page E is about food';
  }
  if (label === 'Page F') {
    return 'Page F is about baby food';
  }
  return '';
};
export default function Example2() {
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
      <Tooltip content={<CustomTooltip />} wrapperStyle={{left: -130 }}/>
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