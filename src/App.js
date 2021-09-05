import './App.css';
import React from "react";
import Header from "./part1/header/Header";
import Content from "./part1/content/Content";
import Part from "./part1/part/Part";
import Total from "./part1/total/Total";

function App() {
    const course = {
        name: 'Half Stack application development',
        parts: [
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
    }

    return (
        <div>
            <Header course={course.name}/>
            <Part part={course.parts[0].name} exercises={course.parts[0].exercises}/>
            <Part part={course.parts[1].name} exercises={course.parts[1].exercises}/>
            <Part part={course.parts[2].name} exercises={course.parts[2].exercises}/>
            <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
        </div>
    )
}

export default App;
