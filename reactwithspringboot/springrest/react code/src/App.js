
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import AddCourse from './components/AddCourse';
import AllCourses from './components/AllCourses';
import Course from './components/Course';
import Header from './components/Header';
import Home from './components/Home';
import Menus from './components/Menus';


function App() {
  const btnHandle =()=>{
    toast.success("this is my first Application" , {
          position : "top-center",
    });
  };

  return (
  <div>
     <BrowserRouter>
     <ToastContainer/>
     <Container>
      <Header/>
        <Row>
          <Col md={4}>
             <Menus/>
          </Col>
          <Col md={8}>
         <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/add-course" element={<AddCourse/>} exact/>
            <Route path="/view-courses" element={<AllCourses/>} exact/>
         </Routes>
          </Col>
        </Row>
     </Container>
     </BrowserRouter>
    </div>
  );
}
export default App;
