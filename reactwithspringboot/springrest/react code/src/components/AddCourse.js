import axios from 'axios';
import React, { Fragment,useEffect,useState } from 'react'
import { toast } from 'react-toastify';
import base_url from '../api/BootApi';
import { Form, FormGroup,Label,Input,TextArea, Container, Button } from 'reactstrap'

const  AddCourse = () => {
    useEffect(() => {
        document.title="Add New Courses"
    }, []);
//form submit handler
    const [course , setCourse] = useState({});
    const submitHandler =(e)=>{
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    }
    //post method to post data to the server

    const postDataToServer =(data)=>{
        axios.post(`${base_url}/addCourse`,data).then(
            (response)=>{
                console.log(response.data)
                toast.success("Successfully updated");
            },
            (error)=>{
                console.log(error);
            }
        );
    };
    return (
        <Fragment>

        <h3 className='text-center py-2'>Fill Course Detail</h3>
        <Form onSubmit={submitHandler}>
          <FormGroup>
             <label for="userId">Course Id </label>
             <Input  type="text" placeholder='Enter User Id' name="userId" id="userId"
             onChange={(e)=>{
                 setCourse({...course,courseId:e.target.value});
             }}
             />
          </FormGroup>

          <FormGroup>
          <label for="title">Course Title </label>
          <Input  type="text" placeholder='Enter Course Title' name="title" id="title"
             onChange={(e)=>{
                 setCourse({...course,title:e.target.value})
             }}
          />
       </FormGroup>

       <FormGroup>
       <label for="description">Course Description </label>
       <Input  type="textarea" placeholder='Enter Course Description' name="description" id="description"
           onChange={(e)=>{
               setCourse({...course,description:e.target.value})
           }}
       />
      </FormGroup>

        <Container className='text-center'>
           <Button  type="submit" className='mr-3' color='success'>Add Course</Button>
           <Button  color='warning'>Clear</Button>
        </Container>
        </Form>
          
        </Fragment>
    )
}

export default AddCourse
