
import React from 'react';
import imghome from "../assets/imgs/8b7755f7dae7baa3f764325b63586532.jpg";


const Home = () => {
    return (
        <div className=' flex '>
            <div className=' w-1/2'>
                <img className=" w-full " src={imghome} alt="home" />
                </div>

                <div className=' w-1/2'>
                <img className=" w-full " src={imghome} alt="home" />
                </div>
            
        </div>
    );
};

export default Home;
