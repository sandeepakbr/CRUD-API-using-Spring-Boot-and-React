import React,{useState,useEffect} from 'react'
import Course from './Course'
import {Button} from 'reactstrap';
import axios from 'axios'
import base_url from '../api/BootApi';
import { toast } from 'react-toastify';
function AllCourses() {

    useEffect(()=>{
        document.title="All Courses"
    },[]);

    //function to call server
    const getAllCoursesFromServer = ()=>{
        axios.get(`${base_url}/cources`).then(
            //success
            (response) =>{
                console.log(response);
                console.log(response.data);
                toast.success("Course has been loaded",{
                    position:"bottom-center"
                });
                setCourses(response.data);
            },
            //error
            (error)=>{
                console.log(error);
                toast.error("Something went wrong");
            }
        );
    };

    useEffect(()=>{
        getAllCoursesFromServer();
    },[]);
    const [courses,setCourses] = useState([
    ])
    return (
        <div>
        
            <h2>All Courses</h2>
            <h3>List of all courses</h3>
             {
                 courses.length>0 ? courses.map((item) => <Course key={item.id} course={item}/>):"No Courses are available"
             }
        </div>
    )
}

export default AllCourses
