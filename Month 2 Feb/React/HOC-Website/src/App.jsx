import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsCards from './Components/DetailsCards';

function App() {

  //Javascript
  console.log("Parth");

  //Variable
  const name = "HOC";    //We can not chane const value

  let age = 21;            //we can change value
  console.log(name, "-----");

  console.log(age, "----");

  //String
  const a = "HOC";

  //Array
  const b = ["apple", "banana", "mango", 3110];

  //object
  const data = {
    name: "Parth",
    city: "Karad",
  };

  //if-else -ternary operator
  //functions
  const fullname = "PSK"

  if (fullname == "pppp") {
    console.log(true)
  } else {
    console.log(false)
  }

  function addnumber() {

    console.log("click")

  }







  //Arraays of object

 













  return (
    <>
      <button className='btn btn-primary' onClick={addnumber} >Dab Mala</button>

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            {/* CardTitle-Props || CardDescription- Props || We can add more props also */}
            <DetailsCards CardTitle="Parth" cardDescription="Kulkarni" />
          </div>

          <div className="col-md-3">
            {/* CardTitle-Props || CardDescription- Props || We can add more props also */}
            <DetailsCards CardTitle="Parth" cardDescription="Kulkarni" />
          </div>

          <div className="col-md-3">
            {/* CardTitle-Props || CardDescription- Props || We can add more props also */}
            <DetailsCards CardTitle="Parth" cardDescription="Kulkarni" />
          </div>

          <div className="col-md-3">
            {/* CardTitle-Props || CardDescription- Props || We can add more props also */}
            <DetailsCards CardTitle="Parth" cardDescription="Kulkarni" />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
