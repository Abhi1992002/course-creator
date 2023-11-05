import { Card } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import headerImage from "../assets/Images/02.png";
import CardContent from "@mui/material/CardContent";
import HorizentalScroll from "./HorizentalScroll";

export default function Landing() {
  const navigate = useNavigate();

  const startHandler = () => {
    navigate("/courses");
  };
  return (
    <div>
      <header
        style={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
          gap: "32px",
          justifyContent: "center",
          width: "100vw",
          height: "87vh",
          paddingTop: "0px",
          margin: "30px 0 30px 0",
        }}
      >
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px",
            height: "95%",
            width: "50%",
            marginLeft: "20px",
            backgroundColor: "#EDF1FF",
            borderRadius: "12px",
          }}
        >
          <h1
            style={{
              fontSize: "56px",
              width: "100%",
              maxWidth: "800px",
              textAlign: "center",
            }}
          >
            Welcome to the Learning Roadmap Platform!
          </h1>
          <p
            style={{
              fontSize: "20px",
              width: "100%",
              maxWidth: "800px",
              textAlign: "center",
            }}
          >
            Create and explore personalized learning roadmaps for your full
            stack development journey
          </p>
          <Button
            onClick={startHandler}
            variant="contained"
            sx={{
              width: "100%",
              maxWidth: "800px",
              marginTop: "30px",
              borderRadius: "12px",
              padding: "10px",
              background:"black"
            }}
          >
            get Started
          </Button>
        </Card>
        <img
          src={headerImage}
          style={{
            zIndex: 2,
            height: "46vw",
            width: "55%",
            position: "absolute",
            right: "0",
          }}
          alt=""
        />
      </header>
      <section
        style={{
          width: "100vw",
          margin: "60px 0 10px 0",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          gap: "60px",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "56px" }}>Key Features</h1>

        <div
          style={{
            display: "flex",
            gap: "80px 100px",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            elevation={10}
            style={{
              width: "100vw",
              borderRadius: "12px",
              maxWidth: "500px",
              height: "300px",
              margin: "0",
            }}
          >
            <CardContent
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                alignItems: "center",
                paddingTop: "50px",
              }}
            >
              <h1>Create Course</h1>
              <p>
              Craft and customize your own course with ease. Add engaging content, quizzes, and assignments to provide a comprehensive learning experience
              </p>
              <Button variant="contained" sx={{ width: "50%" }}>
                Explore
              </Button>
            </CardContent>
          </Card>
          <Card
            elevation={10}
            style={{
              width: "100vw",
              borderRadius: "12px",
              maxWidth: "500px",
              height: "300px",
              margin: "0",
            }}
          >
            <CardContent
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                alignItems: "center",
                paddingTop: "50px",
              }}
            >
              <h1>Purchase Course</h1>
              <p>
              Browse through a variety of courses, find your match, and purchase it with just a few clicks. Once purchased, the course is yours forever
              </p>
              <Button variant="contained" sx={{ width: "50%" }}>
                Explore
              </Button>
            </CardContent>
          </Card>
          <Card
            elevation={10}
            style={{
              width: "100vw",
              borderRadius: "12px",
              maxWidth: "500px",
              height: "300px",
              margin: "0",
            }}
          >
            <CardContent
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                alignItems: "center",
                paddingTop: "50px",
              }}
            >
              <h1>Explore Course</h1>
              <p>
              Dive into our course library by category, difficulty level, or instructor. Each course includes a detailed description, curriculum overview, and user reviews to help guide your choice.
              </p>
              <Button variant="contained" sx={{ width: "50%" }}>
                Explore
              </Button>
            </CardContent>
          </Card>
          
        </div>
      </section>
      <section
        style={{
          width: "100vw",
          margin: "60px 0",
          height: "80vh",
          justifyContent: "center",
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "60px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "56px",
          }}
        >
          Testimonials
        </h1>
        <HorizentalScroll />
      </section>
      <footer style={{width:"100vw",height:"50vh",background:"black",color:"white", display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>

        <div className="initial-content" style={{display:"flex",alignItems:'flex-start',gap:"40px"}}>

        <div style={{maxWidth:"300px" ,textAlign:"center",display:"flex",flexDirection:'column',gap:"20px"}}>
          <p style={{fontSize:"18px" , textDecoration:"underline"}}>About Us</p>
          <p style={{fontSize:"12px"}}>At Learning Roadmap, our mission is to empower learners in their pursuit of knowledge. We provide a user-friendly platform where learners can create and discover personalized learning roadmaps for any subject or technology. Join our community today and embark on your journey of continuous learningå</p>
        </div>

        <div style={{maxWidth:"300px",textAlign:"center",display:"flex",flexDirection:'column',gap:"20px" }}>
          <p style={{fontSize:"18px", textDecoration:"underline"}}>Contact Information</p>
          <p style={{fontSize:"16px"}}>
          Email: abhimanyu192002@gmail.com
          
          </p>
          <p style={{fontSize:"16px"}}>Phone: +1 (123) 456-7890</p>
        </div>

        <div style={{maxWidth:"300px",textAlign:"center",display:"flex",flexDirection:'column',gap:"20px"  }}>
          <p style={{fontSize:"18px", textDecoration:"underline"}}>Terms and services</p>
          <p style={{fontSize:"18px"}}>
          Privacy policy
          </p>
        </div>  

        <div style={{maxWidth:"300px",textAlign:"center",display:"flex",flexDirection:'column',gap:"20px"  }}>
          <p style={{fontSize:"18px", textDecoration:"underline"}}>Social links</p>
          <p style={{fontSize:"16px"}}>
          Twitter
          </p>
          <p style={{fontSize:"16px"}}>
          Linkdin
          </p>
          <p style={{fontSize:"16px"}}>
          Github
          </p>
        </div> 

        </div>

        <div className="logo" style={{position:"relative",top:"20%",fontSize:"40px",borderBottom:"2px solid white",width:"330px",textAlign:"center"}}>
          Course-Roadmap
        </div>
      </footer>
    </div>
  );
}
