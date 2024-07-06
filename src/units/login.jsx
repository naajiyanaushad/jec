import NavBar from "./navbar";

function Login(){
    return(
        <div style={{backgroundImage:'url(./s.jpg',backgroundSize:'contain',minHeight:'100vh'}}>
        <>
        <NavBar/>
        <div style={{display: 'flex ' ,justifyContent: 'center',alignItems: 'center',height: '100vh'}}>
        <div style={{border: '5px solid silver',width: '400px',display:' flex',flexDirection: 'column',justifyContent: 'center',backgroundColor: 'palevioletred',borderRadius: '7px'}}>
            <h1 style={{fontStyle: 'oblique',fontSize:'xx-large',color:'white',height: '50px'}}>Login</h1>
            
    
            <div style={{display: 'flex',flexDirection: 'column',gap: '20px'}}>
            <input style={{border:'2px solid gray',borderRadius: '10px',height: '30px'}} type="text" placeholder="Enter your Email"></input>
            <input style={{border:'2px solid gray',borderRadius: '10px',height: '30px'}}  type="text" placeholder="Enter your Password"></input>

        <button style={{height: '50px', fontStyle: 'italic',color: 'grey',backgroundColor: 'white',borderRadius: '10px'}}>LOGIN</button>
        <a href="/user" style={{fontStyle: 'italiC',color:' blue',display: 'flex',flexDirection: 'column'}}>Forgot your Password?</a>
        <a href="/register" style={{fontStyle: 'italiC',color:' blue',display: 'flex',flexDirection: 'column'}}>Or SIGN IN</a>
        </div>
      </div>
      </div>
      </>
      </div>
     )
}

export default Login;