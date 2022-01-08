import React,{useEffect} from 'react';
import './Home.css';
import { Button } from 'reactstrap';
import { Card,CardBody ,CardTitle,Container,CardText,CardSubtitle} from "reactstrap";
function Home() {
  useEffect(()=>{
    document.title="Home || Learn With Sandeep Kumar"
  })
    return (
        <Card className='home-container text-center mt-1'>
          <CardBody>
            <CardTitle tag="h5">
              Card title
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted" tag="h6" >
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <Container >
                <Button color="primary" className='mb-1' outline>Start Using</Button>
            </Container>
          </CardBody>
        </Card>
    )
}

export default Home
