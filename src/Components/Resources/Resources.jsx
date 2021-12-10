import {React,useState} from 'react'
import HOC from '../../HOC/HOC'
import { withRouter } from 'react-router'
const Resources = () => {
    const resources=[
        {data: "Lorem Ipsum is a fish text often used in print and web design."},
        {data: "Lorem Ipsum is a fish text often used in print and web design."},
        {data: "Lorem Ipsum is a fish text often used in print and web design."},
        {data: "Lorem Ipsum is a fish text often used in print and web design."},
        {data: "Lorem Ipsum is a fish text often used in print and web design."},
        {data: "Lorem Ipsum is a fish text often used in print and web design."},
        {data: "Lorem Ipsum is a fish text often used in print and web design."},
        {data: "Lorem Ipsum is a fish text often used in print and web design."},
        {data: "Lorem Ipsum is a fish text often used in print and web design."},
        {data: "Lorem Ipsum is a fish text often used in print and web design."}
    ]

    return (
        <>
           <div className="content_padding">
                <div className="mt-3 mb-3 text-center page_heading">Our Resources</div>
                <div className="support_input_feild_margin">
                    {resources.map((item,index)=>(
                        <div className="mt-2 text-center">
                        <p>{index + 1} {"."}{item.data}</p>
                     </div>
                    ))}
                        
                  
                </div>
            </div>  
        </>
    )
}

export default withRouter(HOC(Resources));
