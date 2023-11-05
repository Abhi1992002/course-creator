import { Button, Typography } from "@mui/material";
import {useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate()

    const signinHandler = ()=>{
         navigate('/signin')
    }

    const signupHandler = () => {
         navigate('/signup')
    }

    const logoHandler = ()=>{
         navigate('/')
    }  

    const homeHandler = ()=>{
      navigate('/')
    }

    const createHandler = ()=>{
      navigate('/admin/createCourse')
    }

    const exploreHandler = ()=>{
      navigate('/courses')
    }

    const purchaseHandler = ()=>{
      navigate('/courses/purchased')
    }

    const navButton ={
      background:"transparent",
      border:'none',
      color: 'white',
      fontSize:'18px'
    }

   


  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px",background:"black",color:"white"}}>
      <div className="logo" onClick={logoHandler}>
        <Typography sx={{borderBottom:'1px solid white' , cursor:"pointer" ,fontFamily:'Ubuntu !important'}} variant="h5">Course-Roadmap</Typography>
      </div>

      <div className="nav-middle" style={{display:"flex",alignItems:"center",gap:"40px" , fontSize:"18px"}}>
        <button style={navButton} onClick={homeHandler}>Home</button>
        <button style={navButton} onClick={createHandler}>Create Course</button>
        <button style={navButton} onClick={exploreHandler}>Explore Courses</button>     
        <button style={navButton} onClick={purchaseHandler}>Purchased Courses</button>     
      </div>

      <div>
        <Button variant="contained" onClick={signupHandler}>
          <Typography variant="h6">Sign Up</Typography>
        </Button>
        <Button variant="contained" style={{marginLeft:"20px",background:"black"}} onClick={signinHandler}>
          <Typography variant="h6">Sign in</Typography>
        </Button>
      </div>
    </div>
  );
}
