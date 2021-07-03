import React from 'react';
import some from'./logoo.png';
const Login =( props) =>{


    const{email,setEmail,password,setPassword,handleLogin,handleSignup,hasAccount,setHasAccount,emailError,passwordError }=props;
    
    return(
        <section className="login">

            <div className="loginContainer">
            <div><center><img  src={some} alt="fireSpot" width = "250px"/></center></div>
            <br></br>
            <br></br>
               <center><label>Enter your E-mail

                </label>
                </center> 
                <input
                type="text"
                autoFocus
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError} </p>
<center>
                 <label>Enter the Password atleast 6 characters

                </label>
                </center>
                <input
                type="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError} </p>
                <div className="btnContainer">
                    {hasAccount ?(
                        <>
                        <button  onClick={handleLogin}>Sign in</button>
                        <p> Dont't have An Account? <span onClick={()=> setHasAccount(!hasAccount)}> Sign up</span>

                        </p>
                        </>
                    ):(
                        <>
                        <button onClick={handleSignup}>Sign up</button>
                        <p>
                            Already have an account?<span onClick={()=> setHasAccount(!hasAccount)}>Sign in</span>

                        </p>
                        </>


                    )}
                </div>

            </div>

        </section>
    );
};
export default Login;