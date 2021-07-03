import React from 'react';
import {Link} from 'react-router-dom'
import some from'./logoo.png';

import something from'./img2.gif';
const Hero =({handleLogout} )=>{

    return(
        <section className="hero">
           <nav> 
           <div><img  src={some} alt="fireSpot" width = "100 px"/></div>
              
               
        
                </nav> 
                <br></br>
                <br></br>
                
                
                  
                <div class ="column">
               <tab> </tab> <tab></tab> <br></br><br></br>
                <br></br>
                <br></br>
                <br></br>
                <div><img  src={something} alt="fireSpot"/></div>
                </div>
              <div class="col">
              <div><center><img  src={some} alt="fireSpot" width = "100 px"/></center></div>
                 <br></br>
                     <h4>In today’s age, with numerous cyber frauds and identity thefts, efficient and dependable customer  verification before onboarding has become a prerequisite for many businesses. Many businesses  like matrimonial, car rental, insurance, trading need identity verification. 
                        However, the manual verification of thousands of customers can become a tedious and  cumbersome task for both businesses and customers. Even the digital methods present are slow  and inefficient. Also, identity verification is not user-friendly and degrades the user experience.
                        </h4>
                        <br></br>
                     <center>
                        <Link to='/Verification'>
      <button type="button" className="btn btn-info">Ready to Verify!</button>
      </Link>
      <center><h3> Or, </h3></center>
      <button onClick={handleLogout}>Logout</button>
      </center>
                </div>
          

             
          
                
        </section>
         
         
         
         
    );
};
export default Hero;