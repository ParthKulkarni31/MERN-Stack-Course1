import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const DetailsCards = ( { CardTitle , cardDescription } ) => {
  return (
    <div>
      <Card className=''>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjuIUK2DePpicNVekLtAucUqtdjdTWUPPKA&s" />
      <Card.Body>
        <Card.Title>  {CardTitle}  </Card.Title>
        <Card.Text>
         {cardDescription}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>

        
      </Card.Body>
    </Card>
    </div>
  )
}

export default DetailsCards
