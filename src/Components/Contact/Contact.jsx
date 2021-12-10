import { Button, Card, Grid,TextField } from '@material-ui/core';
import React from 'react'
import HOC from '../../HOC/HOC'

//import css
import "./Contact.css";

const Contact = () => {
    return (
        <>
         <div className="new content_padding">

            <div classNam="contact_page">
                <Card className=" mb-5 ">
                    <p className="text-center">CONTACT US</p>  
                    <div className="contact_form">
                    <TextField
         className="mt-2 mb-2"
          label="Name"
          type="text"
          autoComplete="off"
        />     
         <TextField
         className="mt-2 mb-2"
          label="Your Mail"
          type="text"
          autoComplete="off"
        />                  
         <TextField
           className="mt-2 mb-2"
          label="Messege"
          type="text"
          autoComplete="off"
        />     
        </div>
        <div className="text-center mt-3 mb-3">
        <Button className="contact_btn">Submit</Button>
        </div>
                </Card>

          
            </div>

         </div>
            
        </>
    )
}

export default HOC(Contact);
