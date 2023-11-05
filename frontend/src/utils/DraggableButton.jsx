import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper } from '@mui/material'
import { useState } from 'react';
import Draggable from 'react-draggable';

export default function DraggableButton(props) {

    // eslint-disable-next-line react/prop-types
    const {content ,dialogContent,dialogbtn,showCard} = props

    const [openbtn, setOpenbtn] = useState(false);

    const handleClickOpen = () => {
        showCard()
        setOpenbtn(true);
      };
    
      const handleClosebtn = () => {
        showCard(false)
        setOpenbtn(false);
      };

      const handleOpenbtn = () => {
        showCard(true)
        setOpenbtn(false);
      };

      
    
    
      function PaperComponent(props) {
        return (
          <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
          >
            <Paper {...props} />
          </Draggable>
        );
      }
    
  return (
    <div>
    <Button variant="contained" style={{background:"black",borderRadius:"12px",padding:"10px"}} fullWidth  onClick={handleClickOpen}>
      {content}
    </Button>
    <Dialog
      open={openbtn}
      onClose={handleClosebtn}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle
        style={{ cursor: "move" }}
        id="draggable-dialog-title"
      >
        Subscribe
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{width:"30vw"}}>
        {/* Are you sure you want to upload this course? Please confirm your action */}
        {dialogContent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClosebtn}>
          Cancel
        </Button>
        <Button onClick={handleOpenbtn}>{dialogbtn}</Button>
      </DialogActions>
    </Dialog>
   
  </div>
  
  )
}
