import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function App() {
  return (                   // React Fragment
    <>
      <div className='gmail-container'>
        {/* Header */}

        <header className='gmail-header border'>
          <div className='d-flex'>
            <button className='btn'>
              <svg viewBox='0 0 24 24' width="24" height="24">
                <path
                  fill='#5f6368'
                  d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18v6H3z'
                />
              </svg>
            </button>

            <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png'
              alt='gmail-img'
            />
          </div>

          <InputGroup className="header-search mx-auto">
            <InputGroup.Text id="basic-addon1" className='bg-transparent border-0'>
            
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path 
                fill="#5f6368"
                d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"
              />
            </svg>
            </InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              className='border-0'
            />
          </InputGroup>

        </header>
        <div className='container-fluid'>
          <div className='row'>
            {/* Side Bar */}
            <div className='col-md-3 border'>
              <h2></h2>
            </div>


            {/* Main Content */}
            <div className='col-md-9 border'>
              <span>p</span>
            </div>

          </div>

        </div>
      </div>





    </>
  )
}

export default App
