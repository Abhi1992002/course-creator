
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Rating from '@mui/material/Rating';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function HorizentalScroll() {
  
  return (
    <>
 <Swiper
  modules={[Navigation, Mousewheel]}
  spaceBetween={50}
  slidesPerView={2}
  navigation
  onSlideChange={() => console.log('slide change')}
  onSwiper={(swiper) => console.log(swiper)}
  mousewheel={true}
  style={{paddingLeft:"100px",width:"98vw"}}
    >
      <SwiperSlide style={{borderRadius:'12px',background:"#eeeeee"}}>
      <Card
        elevation={10}
        style={{
          width: "100%",
          maxWidth: "500px",
          margin: "0",
          borderRadius: "12px",
          height:"90%"
        }}
      >
        <CardContent
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <h1>Elon Musk</h1>
          <p>
            I used this platform to become a billionaire... well, maybe not
            exactly, but I definitely learned a lot about rockets and electric
            cars! 😄🚀
          </p>
          <Rating name="rating" value={5} readOnly />
        </CardContent>
      </Card>
      </SwiperSlide>
      <SwiperSlide style={{borderRadius:'12px',background:"#eeeeee"}}>
      <Card
        elevation={10}
        style={{
          width: "100%",
          maxWidth: "500px",
          margin: "0",
          borderRadius: "12px",
          height:"90%"
        }}
      >
        <CardContent
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <h1>Jeff Bezos</h1>
          <p>
          Who needs a `one-click` buying button when you can have a `one-click` roadmap to becoming a billionaire? Thanks to this website, I`m halfway to Mars! 😂🛸
          </p>
          <Rating name="rating" value={5} readOnly />
        </CardContent>
      </Card>
      </SwiperSlide>
      <SwiperSlide style={{borderRadius:'12px',background:"#eeeeee"}}>
      <Card
        elevation={10}
        style={{
          width: "100%",
          maxWidth: "500px",
          margin: "0",
          borderRadius: "12px",
          height:"90%"
        }}
      >
        <CardContent
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <h1>Warren Buffett</h1>
          <p>
          I didn`t find my way to a candy store, but this platform helped me navigate the world of stocks and investments like a boss! Cheers to making billions! 🍭💰
          </p>
          <Rating name="rating" value={5} readOnly />
        </CardContent>
      </Card>
      </SwiperSlide>
      <SwiperSlide style={{borderRadius:'12px',background:"#eeeeee"}}>
      <Card
        elevation={10}
        style={{
          width: "100%",
          maxWidth: "500px",
          margin: "0",
          borderRadius: "12px",
          height:"90%"
        }}
      >
        <CardContent
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <h1>Mark Zuckerberg</h1>
          <p>
          I may not have `liked` every single roadmap, but I definitely `liked` the fact that I learned so much about coding and building my empire
          </p>
          <Rating name="rating" value={5} readOnly />
        </CardContent>
      </Card>
      </SwiperSlide>
      <SwiperSlide style={{borderRadius:'12px',background:"#eeeeee"}}>
      <Card
        elevation={10}
        style={{
          width: "100%",
          maxWidth: "500px",
          margin: "0",
          borderRadius: "12px",
          height:"90%"
        }}
      >
        <CardContent
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <h1>Elon Musk</h1>
          <p>
            I used this platform to become a billionaire... well, maybe not
            exactly, but I definitely learned a lot about rockets and electric
            cars! 😄🚀
          </p>
          <Rating name="rating" value={5} readOnly />
        </CardContent>
      </Card>
      </SwiperSlide>
      
    </Swiper>
   </>
    // <div
    //   className="slider"
    //   style={{position:"relative",display: "flex", gap: "30px",paddingLeft:"50px"}}
    // >
    //   <Card
    //     elevation={10}
    //     style={{
    //       width: "100vw",
    //       maxWidth: "500px",
    //       margin: "0",
    //       borderRadius: "12px",
    //     }}
    //   >
    //     <CardContent
    //       sx={{
    //         textAlign: "center",
    //         display: "flex",
    //         flexDirection: "column",
    //         gap: "30px",
    //         alignItems: "center",
    //       }}
    //     >
    //       <h1>Elon Musk</h1>
    //       <p>
    //         I used this platform to become a billionaire... well, maybe not
    //         exactly, but I definitely learned a lot about rockets and electric
    //         cars! 😄🚀
    //       </p>
    //       <Rating name="rating" value={5} readOnly />
    //     </CardContent>
    //   </Card>
    //   <Card
    //     elevation={10}
    //     style={{
    //       width: "100vw",
    //       maxWidth: "500px",
    //       margin: "0",
    //       borderRadius: "12px",
    //     }}
    //   >
    //     <CardContent
    //       sx={{
    //         textAlign: "center",
    //         display: "flex",
    //         flexDirection: "column",
    //         gap: "30px",
    //         alignItems: "center",
    //       }}
    //     >
    //       <h1>Elon Musk</h1>
    //       <p>
    //         I used this platform to become a billionaire... well, maybe not
    //         exactly, but I definitely learned a lot about rockets and electric
    //         cars! 😄🚀
    //       </p>
    //       <Rating name="rating" value={5} readOnly />
    //     </CardContent>
    //   </Card>
    //   <Card
    //     elevation={10}
    //     style={{
    //       width: "100vw",
    //       maxWidth: "500px",
    //       margin: "0",
    //       borderRadius: "12px",
    //     }}
    //   >
    //     <CardContent
    //       sx={{
    //         textAlign: "center",
    //         display: "flex",
    //         flexDirection: "column",
    //         gap: "30px",
    //         alignItems: "center",
    //       }}
    //     >
    //       <h1>Elon Musk</h1>
    //       <p>
    //         I used this platform to become a billionaire... well, maybe not
    //         exactly, but I definitely learned a lot about rockets and electric
    //         cars! 😄🚀
    //       </p>
    //       <Rating name="rating" value={4} readOnly />
    //     </CardContent>
    //   </Card>
    //   <Card
    //     elevation={10}
    //     style={{
    //       width: "100vw",
    //       maxWidth: "500px",
    //       margin: "0",
    //       borderRadius: "12px",
    //     }}
    //   >
    //     <CardContent
    //       sx={{
    //         textAlign: "center",
    //         display: "flex",
    //         flexDirection: "column",
    //         gap: "30px",
    //         alignItems: "center",
    //       }}
    //     >
    //       <h1>Elon Musk</h1>
    //       <p>
    //         I used this platform to become a billionaire... well, maybe not
    //         exactly, but I definitely learned a lot about rockets and electric
    //         cars! 😄🚀
    //       </p>
    //       <Rating name="rating" value={5} readOnly />
    //     </CardContent>
    //   </Card>
    //   <Card
    //     elevation={10}
    //     style={{
    //       width: "100vw",
    //       maxWidth: "500px",
    //       margin: "0",
    //       borderRadius: "12px",
    //     }}
    //   >
    //     <CardContent
    //       sx={{
    //         textAlign: "center",
    //         display: "flex",
    //         flexDirection: "column",
    //         gap: "30px",
    //         alignItems: "center",
    //       }}
    //     >
    //       <h1>Elon Musk</h1>
    //       <p>
    //         I used this platform to become a billionaire... well, maybe not
    //         exactly, but I definitely learned a lot about rockets and electric
    //         cars! 😄🚀
    //       </p>
    //       <Rating name="rating" value={4.5} readOnly />
    //     </CardContent>
    //   </Card>
    //   <Button sx={{position:'absolute',left:'90vw',top:"50%",zIndex:'100',opacity:"0.5",transform:"translateY(-50%)"}}>
    //     <ArrowForwardIosIcon sx={{fontSize:'100px'}}/>
    //   </Button>
    // </div>
  );
}
