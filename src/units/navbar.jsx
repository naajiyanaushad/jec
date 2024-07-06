function NavBar()
{
    return (
      <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'palevioletred',padding:' 10px',border: '5px solid white',fontSize: 'x-large'}}>   
       <h1 style={{fontWeight: 'bold',fontStyle: 'italic',color: 'white',fontSize: '70px'}}>Zephyr</h1>
      <button style={{borderRadius:'5px',width:'100px',height:'50px',display:'flex',justifyContent:'center',alignItems:'center'}}>Login</button>
      
      </div>
    );
  }
  export default NavBar;