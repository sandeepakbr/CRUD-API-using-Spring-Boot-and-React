import { Card,CardBody ,CardTitle,CardFooter,Container,Button,CardText,CardSubtitle} from "reactstrap";

const Course = ({course}) =>{
    return(
        <Card className="text-center">
          <CardBody>
            <CardTitle tag="h5">
            {course.title}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted" tag="h6" >
             {course.title}
            </CardSubtitle>
            <CardText>
              {course.description}
            </CardText>
            <Container className="text-center">
             <Button color="warning ">
                Update
              </Button>
              <Button color="danger" className="ml-3" >
                Delete
              </Button>
            </Container>
          </CardBody>
        </Card>
    )
}
export default Course;
