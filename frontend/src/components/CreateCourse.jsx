import { Card, CardContent, TextField, Typography } from "@mui/material";

import { useState } from "react";
import DraggableButton from "../utils/DraggableButton";

export default function CreateCourse() {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [imageValue , setImageValue] = useState("")



  const titleHandler = (e) => {
    setTitleValue(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescriptionValue(e.target.value);
  };

  const imageHandler = (e)=>{
    setImageValue(e.target.value)
  }

  const uploadCourse = () => {

    // Post the course here
    console.log(titleValue, descriptionValue ,imageValue);
  };

  return (
    <div
      style={{
        width: "99vw",
        background: "#EDF1FF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "30px",
        minHeight: "85vh",
        paddingTop: "100px",
      }}
    >
      <Typography variant="h3">Create Your courses</Typography>

      <Card elevation={10} style={{ width: "90%", height: "70%" }}>
        <CardContent
          style={{
            display: "flex",
            padding: "50px",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "30px",
          }}
        >
          <TextField
            label="Title of the Course"
            fullWidth
            variant="outlined"
            required
            onChange={titleHandler}
          ></TextField>
          <TextField
            label="Description of the Course"
            fullWidth
            variant="outlined"
            required
            onChange={descriptionHandler}
          ></TextField>

          <TextField
            label="Enter the image url"
            fullWidth
            variant="outlined"
            required
            onChange={imageHandler}
          ></TextField>

          <DraggableButton
            dialogbtn={"yes"}
            content="Create course"
            dialogContent={"Are you sure that you need these amount of points"}
            showCard={uploadCourse}
          />
        </CardContent>
      </Card>
    </div>
  );
}
