import './App.css';
import React from "react";
import Header from "./part1/header/Header";
import Content from "./part1/content/Content";
import Part from "./part1/part/Part";
import Total from "./part1/total/Total";

function App() {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]
    return (
        <div>
            <Header course={course}/>
            <Part part={parts[0].name} exercises={parts[0].exercises}/>
            <Part part={parts[1].name} exercises={parts[1].exercises}/>
            <Part part={parts[2].name} exercises={parts[2].exercises}/>
            <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
        </div>
    )
}

export default App;
