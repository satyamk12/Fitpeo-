import React from 'react';
import { BarChart , CartesianGrid , XAxis , YAxis , Tooltip , Legend , Bar , LabelList , Label , Line , LineChart , PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import "./Dashboard.css";

const Dashboard = () => {

    const data = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300
        }
      ]

      const data1 = [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
          amt: 2210
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
          amt: 2290
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 4800,
          amt: 2181
        },
        {
          name: "Page F",
          uv: 2390,
          pv: 3800,
          amt: 2500
        },
        {
          name: "Page G",
          uv: 3490,
          pv: 4300,
          amt: 2100
        }
      ];

      const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      const data02 = [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
      ];

    
  return (
    <>
    <h1>Dashboard</h1>

    <div className="container-fluid">

        <div className="row">
            <div className="col-lg-9">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div class="card overflow-hidden">
                    <div class="card-content">
                    <div class="card-body cleartfix">
                        <div class="media align-items-stretch">
                        <div class="align-self-center">
                            <i class="icon-pencil primary font-large-2 mr-2"></i>
                        </div>
                        <div class="media-body">
                            <span>Revenue</span>
                            <h2>$21,526</h2>
                        </div>
                        <div class="align-self-center">
                            <span>+2.56%</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div class="card overflow-hidden">
                    <div class="card-content">
                    <div class="card-body cleartfix">
                        <div class="media align-items-stretch">
                        <div class="align-self-center">
                            {/* <i class="icon-pencil primary font-large-2 mr-2"></i> */}
                            <i class="fa-solid fa-envelope primary font-large-2 mr-2"></i>
                        </div>
                        <div class="media-body">
                        <span>Orders</span>
                            <h2>5643</h2>
                        </div>
                        <div class="align-self-center">
                            <span>-0.82%</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div class="card overflow-hidden">
                    <div class="card-content">
                    <div class="card-body cleartfix">
                        <div class="media align-items-stretch">
                        <div class="align-self-center">
                        <i class="fa-solid fa-user primary font-large-2 mr-2"></i>
                            {/* <i class="icon-pencil primary font-large-2 mr-2"></i> */}
                        </div>
                        <div class="media-body">
                        <span>Customers</span>
                            <h2>45,254</h2>
                        </div>
                        <div class="align-self-center">
                            <span>-1.04%</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <p className='font-weight-bold'>Overview</p>
                <BarChart width={1150} height={350} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4">
                <p className='font-weight-bold'>User Activity</p>
                <LineChart width={500} height={300} data={data1}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
                </div>

                <div className="col-lg-6">
                <ResponsiveContainer width="100%" height="100%">
        <PieChart width={500} height={500}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
                </div>
            </div>



            </div>

            <div className="col-lg-3">
        <div class="card">
        <img class="card-img-top" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg" alt="Bologna"/>
        <div class="card-body text-center">
          <img class="avatar rounded-circle" src="https://media-exp1.licdn.com/dms/image/C4D03AQEQy7sgeVB2Dg/profile-displayphoto-shrink_800_800/0/1573153359253?e=2147483647&v=beta&t=AAYq0sUBUZT2LxX19cZhKvbJllordHIBVrc12y2j9gA" alt="Bologna"/>
          <h4 class="card-title">Jennifer Bennit</h4>
          <p class="card-subtitle mb-2 text-muted">Product Manager</p>

          <div className="row">
          <div className="col-lg-6">
          <p class="card-text font-weight-bold">1,269 <br /> <span>products</span></p>
          </div>

          <div className="col-lg-6">
          <p  class="card-text font-weight-bold"><vr></vr> 5.2k <br /> <span> followers</span></p> 
          </div>
          </div>

          <hr />

          <p className='text-start'>Earnings</p>


          <a href="#" class="btn btn-info">Follow</a>
          <a href="#" class="btn btn-outline-info">Message</a>
        </div>
      </div>
        </div>
        </div>

    </div>
    </>
  )
}

export default Dashboard;   