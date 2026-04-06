import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Screens/HomePage';

const App = () => {
  const name = "HOC"
  return (
    <div>
      <h2>{name}</h2>
      <Homepage/>
    </div>
  )
}

export default App