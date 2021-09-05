import './App.css';
import React from "react";
import Header from "./part1/header/Header";
import Content from "./part1/content/Content";
import Part from "./part1/part/Part";
import Total from "./part1/total/Total";

function App() {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }
    return (
        <div>
            <Header course={course}/>
            <Part part={part1.name} exercises={part1.exercises}/>
            <Part part={part2.name} exercises={part2.exercises}/>
            <Part part={part3.name} exercises={part3.exercises}/>
            <Total total={part1.exercises + part2.exercises + part3.exercises}/>
        </div>
    )
}

export default App;
