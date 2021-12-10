import { Grid } from '@material-ui/core'
import React from 'react'
import f from "./f.png"
import HOC from '../../HOC/HOC'


const About = () => {
    return (
        <>
        
        <div className="new content_padding">
         <Grid className="paint">
           <Grid item md={6}>
           <h3>Paint Point Description
                and our solution</h3>
                <p>Lorem Ipsum is a fish text often used in print and web design. Lorem Ipsum has been the standard "fish" for Latin texts since the early 16th century.</p>

<p>At the time, an unnamed printer created a large collection of font sizes and shapes using Lorem Ipsum to print samples. Lorem Ipsum Not only successfully survived five.</p>

<p>Lorem Ipsum is a fish text often used in print and web design. Lorem Ipsum has been the standard "fish" for Latin texts since the early 16th century.</p>


           </Grid>
           <Grid item md={6}>
          <img src={f} alt=""  />
           </Grid>
         </Grid>
           

            <div className="point text-center page_heading mt-5 mb-2">Paint point description and our solution</div>

            <Grid className="paint">
            <Grid item md={3}>
                        <div><span className="content_point"><i class="fa fa-circle"></i></span>------------------</div>
                        <div className="page_heading">Lorem Ipsum</div>
                        <div className="p-2">Lorem Ipsum is a fish text often
                            used in print and web design.
                            Lorem Ipsum has been the
                            standard "fish"</div>
                    </Grid>

                    <Grid item md={3}>
                        <div><span className="content_point"><i class="fa fa-circle"></i></span>------------------</div>
                        <div className="page_heading">Lorem Ipsum</div>
                        <div className="p-2">Lorem Ipsum is a fish text often
                            used in print and web design.
                            Lorem Ipsum has been the
                            standard "fish"</div>
                    </Grid>

                    <Grid item md={3}>
                        <div><span className="content_point"><i class="fa fa-circle"></i></span>------------------</div>
                        <div className="page_heading">Lorem Ipsum</div>
                        <div className="p-2">Lorem Ipsum is a fish text often
                            used in print and web design.
                            Lorem Ipsum has been the
                            standard "fish"</div>
                    </Grid>

                    <Grid item md={3}>
                        <div><span className="content_point"><i class="fa fa-circle"></i></span>------------------</div>
                        <div className="page_heading">Lorem Ipsum</div>
                        <div className="p-2">Lorem Ipsum is a fish text often
                            used in print and web design.
                            Lorem Ipsum has been the
                            standard "fish"</div>
                    </Grid>


            </Grid>
            </div>  
        </>
    )
}

export default HOC(About)
