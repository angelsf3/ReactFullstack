import React from "react";
import Header from "./header/Header";
import Part from "./part/Part";
import Total from "./total/Total";

function Course({ course }) {
    return (
        <div>
            <Header course={course.name}/>
            {course.parts.map(part =>
                <Part key={part.id} part={part.name} exercises={part.exercises}/>
            )}
            <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
        </div>
    )
}

export default Course
