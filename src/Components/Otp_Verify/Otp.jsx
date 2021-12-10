import React from 'react'
import HOC from '../../HOC/HOC'
import { Button, Card, Grid} from '@material-ui/core'

//css
import './Otp.css'

const Otp = (props) => {
    return (
        <>
         <div className="content_padding">
       
       <div>
        <Card>
            <Grid className="otp_form">

                <Grid md={6}>
                    <div className="otp_tab_btn">
                   <span className="pl-3 m-3"> <Button>Sign Up</Button></span>
                       <span className="pl-3 m-3"><Button onClick={() => props.history.push("./login")}>Login</Button></span>
                        
                    </div>
                   <div className="m-2">
                  <input 
                  type="password"
                  placeholder="Enter OTP"
                  autoComplete="off"
                  class="form-control"
                  
                  />
                  <div className="mt-3">
                      <Button className="submit_otp">Submit</Button>
                  </div>
                   </div>
                    
                    </Grid>


                <Grid md={6}>
                    
                    <div className="">  
                    
                    </div>
                    
                    </Grid>

            </Grid>
        </Card>
       </div>

            </div>
            
        </>
    )
}

export default HOC(Otp)
