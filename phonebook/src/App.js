import './App.css';
import React, {useState} from "react";
import Person from "./person/Person";

function App() {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newName, setNewName] = useState('')
    const [newTelephone, setNewTelephone] = useState('')
    const [filter, setFilter] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const person = {
            name: newName,
            telephone: newTelephone
        }

        if (!persons.find(p => p.name === person.name))
            setPersons(persons.concat(person))
        else
            alert(`${person.name} is already added to phonebook`)
    }

    const handleNameChange = (event) => setNewName(event.target.value)
    const handleTelephoneChange = (event) => setNewTelephone(event.target.value)

    const handlePredicateChange = (event) => setFilter(event.target.value)

    return(
        <div>
            <h2>Phonebook</h2>
            <div>
                <input value={filter} onChange={handlePredicateChange}/>
            </div>
            <h2>add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    telephone: <input value={newTelephone} onChange={handleTelephoneChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons
                    .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
                    .map(person => <Person key={person.id} person={person}/> )}
            </ul>
        </div>
    )
}

export default App;
