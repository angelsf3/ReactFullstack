import './App.css';
import React, {useState} from "react";
import Person from "./person/Person";

function App() {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])

    const [newName, setNewName] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const person = { name: newName }

        if (!persons.find(p => p.name === person.name))
            setPersons(persons.concat(person))
        else
            alert(`${person.name} is already added to phonebook`)
    }

    const handleNameChange = (event) => setNewName(event.target.value)

    return(
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map(person => <Person key={person.name} person={person}/> )}
            </ul>
        </div>
    )
}

export default App;
