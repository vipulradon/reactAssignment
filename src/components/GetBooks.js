import {React,useEffect, useState} from "react";
import axios from "axios";
import DataTable from "react-data-table-component"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function GetBooks(){
  const [books,setBooks]=useState([])
 
  useEffect(()=>{
    const getBooks = async()=>{
      const response = await axios.get("http://localhost:5000/books")
      // console.log(response)
      setBooks(response.data.data)
    }
    getBooks()
  },[])
  

  const columns = [
    {
      name:"TITLE",
      selector:(row)=>row.title,
      style: {
        		backgroundColor: 'rgba(63, 195, 128, 0.9)',
        		color: 'white',
        	
    },
        divider: {
          default: 'rgba(0,0,0,.12)',
        },
},
    
    {
      name:"CATEGORY",
      selector:(row)=>row.category
    },
    {
      name:"EXCERPT",
      selector:(row)=>row.excerpt,
      style: {
        			backgroundColor: 'rgba(187, 204, 221, 1)',
        		},
            divider: {
              default: 'rgba(0,0,0,.12)',
            },
    },
    {
      name:"RELEASE-DATE",
      selector:(row)=>row.releasedAt,
      
    },
    
  ]


  return (
  <>
   <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Encode</Navbar.Brand>
          <Nav className="d-flex">
          <Nav.Link href="/dashboard/books/:bookId">Book</Nav.Link>
            <Nav.Link href="/dashboard/books">Books List</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  <h1 className="htext" style={{textAlign:"center"}}>All Books</h1>
    <DataTable  columns={columns} data={books} pagination/>
    </>
    
  )
}

export default GetBooks;
