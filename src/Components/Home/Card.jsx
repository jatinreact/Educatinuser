import React from 'react'
import { Grid,Button } from '@material-ui/core';



const MainCard = () => {

    const priceCard = [{ title: "Introduction to Coding", price: "309" ,src:"https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},

    { catagores:"physics" ,title: "Introduction to Coding", price: "309", src:"https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    { catagores:"chemistry" ,title: "Introduction to Coding", price: "309" , src:"https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    { catagores:"physics" ,title: "Introduction to Coding", price: "309" , src:"https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    { catagores:"maths" ,title: "Introduction to Coding", price: "309" ,src:"https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    { catagores:"physics" ,title: "Introduction to Coding", price: "309" ,src:"https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},


    ]

    return (
        <>


                {/* <div className="btn_backgrround">
                <Grid className="Component_main_grid mt-5 p-3 text-center">
                    <Grid item md={3} className="p-3">
                   <Button>Physics</Button>
                    </Grid>
                    <Grid item md={3} className="p-3">
                    <Button>Chemistry</Button>
                    </Grid>
                    <Grid item md={3} className="p-3">
                    <Button>Maths</Button>
                    </Grid>
                    <Grid item md={3} className="p-3">
                    <Button>All</Button>
                    </Grid>
                </Grid>
                </div> */}



            <div className="mt-5 ml-4 mr-4">
                <hr style={{ width: "80%" }} />
                <Grid className="Component_main_grid mt-2 p-3 ">
                    {
                        priceCard.map((item, index) => (




                            <Grid item md={4} className="p-3">
                                <div><img className="card_image" src={item.src} /></div>
                                <div className="intro mt-3">
                                    <h4>{item.title}</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div>
                                    <h4>A$ {item.price}/Month</h4>
                                    <p>Price Per Class A$ 38</p>
                                </div>
                                <div className="buy_btn mb-3">
                                    <button className="now_color">Buy Now</button>
                                </div>

                               


                            </Grid>

                        ))
                    }

                </Grid>
            </div>

        </>
    )
}

export default MainCard;
