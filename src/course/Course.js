import React from "react";
import Header from "./header/Header";
import Part from "./part/Part";

function Course({ course }) {
    return (
        <div>
            <Header course={course.name}/>
            {course.parts.map(part =>
                <Part key={part.id} part={part.name} exercises={part.exercises}/>
            )}
        </div>
    )
}

export default Course
