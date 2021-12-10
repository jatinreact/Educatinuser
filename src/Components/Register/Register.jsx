import React,{useState,useEffect} from 'react'
import HOC from '../../HOC/HOC'
import { Button, Card, Grid } from '@material-ui/core'


//css
import './Register.css'





const Register = (props) => {


    return (
        <>


    <div className="content_padding">


      <div className="register_form">

      <Card>
        <Grid className="register_detail">
          <Grid item md={6}>
            <div className="p-2">
              <input 
              type="text"
              placeholder="Mobile"
              autoComplete="on"
              class="form-control"

              />
            </div>
           
            <div className="p-2">
              <input 
              type="text"
              placeholder="Email"
              autoComplete="on"
              class="form-control"

              />
            </div>
            
            <div class="p-2">
              <input 
              type="password"
              placeholder="Password"
              class="form-control"
              autoComplete="off"
              />
            </div>
            <div className="pl-3">
              <p>Already have an account?<span className="pl-1 link_color_login" onClick={ () => props.history.push("/login")}>Login</span></p>
            </div>
            <div className="p-2 mt-3 ">
              <Button className="sign_up_btn" onClick={ () => props.history.push("/Otp")}>SIGN UP</Button>
            </div>
           
          </Grid>
          <Grid item md={6}>
            <div className="register_img pl-5 mb-3">
              <img src="https://img.lovepik.com/element/45004/5805.png_300.png" alt=""/>

            </div>
          </Grid>

        </Grid>
      </Card>


      </div>
   


            </div>

            
        </>
    )
}

export default HOC(Register);
