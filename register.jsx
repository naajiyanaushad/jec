import NavBar from "./navbar";

function Register()
{
   
    return (
        <div style={{backgroundImage:'url(./s.jpg',backgroundSize:'contain',minHeight:'100vh'}}>
        <>
        <NavBar/>
        <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100vh'}}>
        <div style={{border: '5px solid silver',display: 'flex',flexDirection: 'column',justifyContent: 'center',backgroundColor: 'palevioletred',borderRadius: '7px',gap: '5px',width: '300px',height: '500px'}}>
                        <h1 style={{fontStyle: 'oblique',color: 'white',height: '50px'}}>Register</h1>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        
            <div style={{display: 'flex',flexDirection: 'column',gap: '20px'}}>
            <input style={{border: '2px solid gray',borderRadius: '10px',height: '30px'}} type="text" id="Username" ></input>
            <input style={{border: '2px solid gray',borderRadius: '10px',height: '30px'}} type="text" id="Email"></input>
            <input style={{border: '2px solid gray',borderRadius: '10px',height: '30px'}} type="text" id="Password"></input>
            <input style={{border: '2px solid gray',borderRadius: '10px',height: '30px'}} type="text" id="Re-password"></input>
        <button style={{height: '50px', fontStyle: 'italic',color: 'grey',backgroundColor: 'white',borderRadius: '10px'}}>SIGN UP</button>
        <a href="/login" style={{fontStyle: 'italiC',color:' blue',display: 'flex',flexDirection: 'column'}}>Or LOGIN</a>
        </div>
        </div>
        </div>
        </div>
        </>
</div>

    )
}

export default Register;