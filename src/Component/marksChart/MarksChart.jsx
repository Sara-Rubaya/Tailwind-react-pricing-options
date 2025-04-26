import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {

    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;
    

    // data processing for the chart
    const marksChartData = marksData.map(studentData => {
        const student ={
            rollNo: studentData.student_rollNo,
            name: studentData.name,
            English: studentData.marks.English,
            Science: studentData.marks.Science,
            Math: studentData.marks.Math,
            Computer:studentData.marks.Computer

        }
        const avg = (student.English + student.Science + student.Math + student.Computer) / 4;
        student.avg = avg;
        return student;
    })

    console.log(marksChartData);
    return (
        <div>
            <BarChart width={500} height={500} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="avg" fill='beige'></Bar>
                <Bar dataKey="English" fill='red'></Bar>

            </BarChart>
        </div>
    );
};

export default MarksChart;