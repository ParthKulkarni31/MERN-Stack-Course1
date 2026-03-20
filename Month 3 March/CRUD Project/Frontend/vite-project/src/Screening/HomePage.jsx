
// Importing table component from react bootstrap to display data in tabular format 
import Table from 'react-bootstrap/Table';
// Importing Button component from react bootstrap to create clickable buttons
import Button from 'react-bootstrap/Button';
// Importing col component from react bootstrap for column layout inside form rows 
import Col from 'react-bootstrap/Col';
// Importing form component from react bootstrap to build the input forms
import Form from 'react-bootstrap/Form';
// Importing row component from react bootstrap to create horizontal rows inside forms
import Row from 'react-bootstrap/Row';
// Importing ToastContainer and toast from react toastify to show success/error notification
import { ToastContainer, toast } from 'react-toastify';
// Importing axios library to make HTTP API calls (POST , DELETE)
import axios from "axios";
// Importing custome CSS file or additional styling
import "./../style.css";
// Importing useEffect & useState hooks from react 
import { useEffect ,  useState } from 'react';       
// Importing modal component from react bootstrapto show delete confirmation popup     
import Modal from 'react-bootstrap/Modal';

function HomePage() {                             // js code written below it               
  const [itemName, setItemName] = useState();   // here we created variables
  const [description, setDescription] = useState();
  const [purchasePrice, setPurchasePrice] = useState();
  const [sellingPrice, setSellingPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [unit, setUnit] = useState();
  const [itemData, setData] = useState();


  async function SubmitForm(e) {           //for printing alert msg on submit button
    try {                                 
    e.preventDefault();                   // its a basic syntax of submit button


    const data = {                        // stores data front end to front end data  
     name : itemName,                      // here we stored varibles 
     description : description,
     purchasePrice : purchasePrice,
     sellingPrice : sellingPrice,
     quantity : quantity,
     unit : unit,
    };

    console.log(data, "Form submitted");    //msg to console after clicking on submit


    const apiResponse = await axios        //for integrating backend and ui in console we insall axios package
    .post("http://localhost:9090/api/create-item",data)   // its a url of create item which will display on network
    .then(console.log("yes"))                      // if its run file will display in network
    .catch((error) => console.log(error));         // if its not run error will shown in network
    console.log(apiResponse);                      // api response = 1 function which we call
    getAllItemsData();                             // because of this we get data in network

    toast.success("Form submitted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,                         // this is basic react toastify syntax which we copied from google to display toast message
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });


  } catch (error) {                    //if its not show data it will show error response in network
    console.log(error)
  }

}



const getAllItemsData = async () => {                  // its a get all items api code 
  try {
    const apiResponse = await fetch("http://localhost:9090/api/get-all-item")   // this is get all items url from postman
    const responseData = await apiResponse.json()                              // to convert response data in json format 
    setData(responseData.data)             // on 20th line we called setdata 

    console.log(responseData)              // when we inspect data from fe it stores in network response tab


  } catch (error) {                        //for showing error
    console.log(error)

  }
};

useEffect(() => {                        // for refreshing page
  getAllItemsData();
}, []);


console.log(                           
  itemData, "itemData ==>"              // it will show "itemData ==>" in console 
)


const [show , setShow] = useState(false);             // if show becomes true then the below popup modal will display otherwise will not 
const[id ,setId] = useState();


const handleClose = () => setShow (false);

const openDeleteModal = (id) => {
  try {
    setShow (true);                      // opens delete popup

    setId(id)                            // it stores id in this variable
    console.log(id ,"id==>")
    console.log("call delete function")
  } catch (error){
    console.log(error)
  }
}

const handleDelete = async () => {              //created function of line no. 284
  try {
    console.log(id , "id==>")
    
     const apiResponse = await axios.delete(`http://localhost:9090/api/delete-item/${id}`)
     setShow(false);                                // closes delete popup
     console.log(apiResponse)               // we did api integration here
     getAllItemsData();                     //when we delete data FE will take latest data from this API
  } catch (error) {
    console.log(error)
  }
}


return (                                // html code write below it
  <>

    <ToastContainer                   //copied from google 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
{/* to give headng we used h2 tag */}
    <h2 className='text-danger text-center my-5'>CRUD - MERN STACK PROJECT START</h2>     {/* to give headng we used h2 tag */}
{/*  */}
    <div className='container'>              {/*here we started our main FE  */} 

      <div className='row'>                     {/* 1 row store 12 cols so  */} 
        <div className='col-md-6'>              {/* we created 2 div of 6 cols */} 
          <h3 className='border text-center'>Create Item</h3>
          <Form className='my-5'>     {/* these forms are copied from react bootstrap forms */}                                         
            <Row className="mb-3">         
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Item Name"
                  onChange={() => setItemName(event.target.value)}         /* onchange = function used for we fill something in item name this will show in console */
                  value={itemName}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Descripition</Form.Label>
                <Form.Control type="text" placholder="Enter descripition"

                  onChange={(event) => setDescription(event.target.value)}
                  value={description}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Purchase Price</Form.Label>
                <Form.Control type="Number" placeholder="Enter Purchase Price"
                  value={purchasePrice}
                  onChange={(event) => setPurchasePrice(event.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Selling Price</Form.Label>
                <Form.Control type="Number" placeholder="Enter Selling Price"
                  value={sellingPrice}
                  onChange={(event) => setSellingPrice(event.target.value)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="Number" placholder="Enter Quantity"
                onChange={(event) => setQuantity(event.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Unit</Form.Label>
                <Form.Select defaultValue="Choose Unit"
                  value={unit}
                  onChange={(event) => setUnit(event.target.value)}
                >
                  <option>Choose Unit</option>        {/* to display options of unit we used option tag here  */}
                  <option>pieces</option>
                  <option>Box</option>
                  <option>Kg</option>
                  <option>gm</option>
                  <option>ltr</option>
                </Form.Select>
              </Form.Group>                         {/* all forms are closed here */}
            </Row>
            <div className='text-center'>         {/* it is created for showing submit button below the form */}
              <Button variant="primary"
                type="submit"
                className='w-50'
                onClick={SubmitForm}
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
        <div className='col-md-6'>                 {/* we started tables here */}
          <h3 className='border text-center'>Get Item</h3> {/* name of table */}

          <Table striped bordered hover>         {/* copied from react bootstrap tables */}
            <thead>
              <tr>
                <th>Id</th>
                <th>Item Name</th>
                <th>Descripition</th>
                <th>Purchase Price</th>               {/* these are headings of tables in th tag */}
                <th>Selling Price</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {
                itemData &&                         /* data from itemData.map stores in &&  */
                itemData.map ((each, index) => {        /*  we no need to add no. in id all time so we used index */
                  return (
                    <tr>
                                                          {/* here value of index is zero eg = 0+1  1+1    2+1 
                                                          each is used to show each object in ui */}
                     
                     
                      <td>{index + 1}</td>                 {/*because of each 1 by 1 action is implemented on*/}
                      <td>{each.name}</td>                  
                      <td>{each.description}</td>
                      <td>{each.purchasePrice}</td>
                      <td>{each.quantity}</td>
                      <td>{each.sellingPrice}</td>
                      <td>{each.unit}</td>
                      <td className='d-flex'>
                        <button className='btn btn-success'>Edit</button>          {/* edit button success= bootstrap btn class  */}
                        <button className='btn btn-danger mx-2'                     /*delet btn = bootstrap btn class for red color */
                        onClick={ () => openDeleteModal(each.id)}                                          /*onclick of popup modal we given to Delete button*/
                        >                   
                          
                                                             
                          Delete
                        </button>
                      </td>

                    </tr>

                  );
                }
                )}




            </tbody>
          </Table>
        </div>
      </div>
    </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do You really want to Delete ?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={ handleDelete}>
            Delete
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
  </>
)
}

export default App                  
 {/* syntax */}
