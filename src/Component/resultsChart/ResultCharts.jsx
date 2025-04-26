import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';


const resultData= [
    {
      "rollNo": 1,
      "name": "Alice Smith",
      "english": 85,
      "math": 90,
      "science": 88,
      "history": 80,
      "total": 343,
      "average": 85.75
    },
    {
      "rollNo": 2,
      "name": "Bob Johnson",
      "english": 78,
      "math": 82,
      "science": 79,
      "history": 65,
      "total": 314,
      "average": 78.5
    },
    {
      "rollNo": 3,
      "name": "Charlie Lee",
      "english": 92,
      "math": 88,
      "science": 94,
      "history": 99,
      "total": 363,
      "average": 90.75
    },
    {
      "rollNo": 4,
      "name": "Diana Brown",
      "english": 65,
      "math": 55,
      "science": 68,
      "history": 72,
      "total": 275,
      "average": 68.75
    },
    {
      "rollNo": 5,
      "name": "Ethan Davis",
      "english": 88,
      "math": 95,
      "science": 55,
      "history": 90,
      "total": 354,
      "average": 88.5
    },
    {
      "rollNo": 6,
      "name": "Fiona Wilson",
      "english": 74,
      "math": 67,
      "science": 79,
      "history": 73,
      "total": 303,
      "average": 75.75
    },
    {
      "rollNo": 7,
      "name": "George Hall",
      "english": 81,
      "math": 83,
      "science": 80,
      "history": 85,
      "total": 329,
      "average": 82.25
    },
    {
      "rollNo": 8,
      "name": "Hannah King",
      "english": 90,
      "math": 95,
      "science": 92,
      "history": 88,
      "total": 365,
      "average": 91.25
    },
    {
      "rollNo": 9,
      "name": "Ian Wright",
      "english": 69,
      "math": 72,
      "science": 70,
      "history": 65,
      "total": 276,
      "average": 69.0
    },
    {
      "rollNo": 10,
      "name": "Julia Green",
      "english": 40,
      "math": 46,
      "science": 69,
      "history": 82,
      "total": 237,
      "average": 85.25
    }
  ]
  

const ResultCharts = () => {
    return (
        <div className='mt-10'>
            <LineChart width={800} height={500} data={resultData}> 
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
              <Line dataKey="english" stroke='red'></Line>
              <Line dataKey="math" stroke='white'></Line>
              <Line dataKey="science" stroke='green'></Line>
              <Line dataKey="history"></Line>
            </LineChart>
        </div>
    );
};

export default ResultCharts;