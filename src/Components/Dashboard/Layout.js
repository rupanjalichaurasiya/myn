import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Layout() {

    const data = [
        {
            name: 'Zara',
            advertising: 4000,
            profit: 2400,
            amt: 2400,
        },
        {
            name: 'H&M',
            advertising: 3000,
            profit: 1398,
            amt: 2210,
        },
        {
            name: 'Luxe',
            advertising: 2000,
            profit: 9800,
            amt: 2290,
        },
        {
            name: 'Chic',
            advertising: 2780,
            profit: 3908,
            amt: 2000,
        },
        {
            name: 'Kay',
            advertising: 1890,
            profit: 4800,
            amt: 2181,
        },
        {
            name: 'Prada',
            advertising: 2390,
            profit: 3800,
            amt: 2500,
        },
        {
            name: 'Chanel',
            advertising: 3490,
            profit: 4300,
            amt: 2100,
        },
    ];

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${label}`}</p>
                    <p className="intro">{`Advertising: ${payload[0].value}`}</p>
                    <p className="desc">{`Profit: ${payload[1].value}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>PRODUCTS</h3>
                        <BsFillArchiveFill className='card_icon' />
                    </div>
                    <h1>300</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>EARNINGS</h3>
                        <BsFillGrid3X3GapFill className='card_icon' />
                    </div>
                    <h1>12000</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>CUSTOMERS</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1>33</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Videos</h3>
                        <BsFillBellFill className='card_icon' />
                    </div>
                    <h1>42</h1>
                </div>
            </div>

            <div className='charts'>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Bar dataKey="advertising" fill="#8884d8" name="Advertising" />
                        <Bar dataKey="profit" fill="#82ca9d" name="Profit" />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="advertising" stroke="#8884d8" activeDot={{ r: 8 }} name="Advertising" />
                        <Line type="monotone" dataKey="profit" stroke="#82ca9d" name="Profit" />
                    </LineChart>
                </ResponsiveContainer>

            </div>
        </main>
    )
}

export default Layout;
