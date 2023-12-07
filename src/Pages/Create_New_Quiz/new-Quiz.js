import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Box, Dialog, DialogActions, DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import MCQSingle from "./MCQ-Single";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';


const Addquiz = () => {
  const [popup, setPopup] = useState(true);
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  //this func is show the option 
  const popupfunc = () => {
    setPopup(false);
  };
  const handleClose = () => {
    navigate('/');
  };
  return (
    <Layout
    >
      <Box className="Box1"
        sx={{
          // height: '30%',
          // width: '50%',
          padding:'16px'
        }}
      >
        {popup ? (
          <Box className="Box2"
            sx={{
              height: '30%',
              width: '50%',
             
            }}
          >
            <Dialog open={open} aria-labelledby="responsive-dialog-title">
                <Box component="div" className="lt" sx={{ display: 'flex',justifyContent: 'end', marginTop: '5px' }}>
                  <CloseIcon  onClick={handleClose}/>
                </Box>
              <DialogTitle
                id="responsive-dialog-title"
                sx={{
                  bgcolor: "#fff",
                  padding:"10px",
                  width: '600px'
                }}
              >
                {"Select Question Type"}
              </DialogTitle>
              <DialogActions
                sx={{
                  bgcolor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "40px",
                  display: 'block',
                }}
              >

                <Box component="div" className="lt" sx={{ display: 'inline' }}>
                  <Button
                    sx={{
                      fontSize: "16px",
                      marginBottom: "10px",
                      bgcolor: "#4f7be9",
                      color: '#fff',
                      ":hover": { bgcolor: "#4f7be9", color: "#fff", borderColor:'#000' },
                    }}
                    onClick={popupfunc}
                    variant="outlined"
                    color="error"
                  >
                    MCQ<p style={{ fontSize: "10px" }}>(Single Correct)</p>
                  </Button>
                </Box>
                <Box component="div" className="lt" sx={{ display: 'inline' }}>
                  <Button
                    sx={{
                      fontSize: "16px",
                      marginBottom: "10px",
                      // bgcolor: "#4f7be9",
                      borderColor:'#000',
                      color: '#000',
                      ":hover": { bgcolor: "#4f7be9", color: "#fff", borderColor:'#000' },
                    }}
                    onClick={popupfunc}
                    variant="outlined"
                    color="error"
                  >
                    MCQ<p style={{ fontSize: "10px" }}>(Multiple Correct)</p>
                  </Button>

                </Box>
                <Box component="div" className="lt"  sx={{ display: 'inline' }}>
                  <Button
                    sx={{
                      fontSize: "16px",
                      marginBottom: "10px",
                      borderColor:'#000',
                      // bgcolor: "#4f7be9",
                      color: '#000',
                      ":hover": { bgcolor: "#4f7be9", color: "#fff", borderColor:'#000' },
                    }}
                    onClick={popupfunc}
                    variant="outlined"
                    color="error"
                  >
                    Short Answer<p style={{ fontSize: "10px" }}>(1 or 2 Correct)</p>
                  </Button>
                </Box>
                <Box component="div" className="lt" sx={{ display: 'inline' }}>
                  <Button
                    sx={{
                      fontSize: "16px",
                      marginBottom: "10px",
                      borderColor:'#000',
                      // bgcolor: "#4f7be9",
                      color: '#000',
                      ":hover": { bgcolor: "#4f7be9", color: "#fff",  borderColor:'#000'},
                    }}
                    onClick={popupfunc}
                    variant="outlined"
                    color="error"
                  >
                    Description<p style={{ fontSize: "10px" }}>(1 or 2 Correct)</p>
                  </Button>
                </Box>


              </DialogActions>
            </Dialog>
          </Box>
        ) : (
          <MCQSingle />
        )}
      </Box>
    </Layout>
  );
};

export default Addquiz;
