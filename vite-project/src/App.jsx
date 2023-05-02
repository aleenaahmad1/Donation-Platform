import './App.css'
import Joke from './Joke'

function App() {

  const jokes = [
    {
      id: 1,
      joke: "first joke", 
    }, {
      id: 2,
      joke: "second joke", 
    }, {
      id: 3,
      joke: "third joke", 
    }
  ]
  return (
    <>
      <h1>Jokes!</h1>
      {jokes.map( joke=>(
        <Joke key={joke.id} joke={joke.joke}/>
      ))}
    </>
  )
}

export default App
