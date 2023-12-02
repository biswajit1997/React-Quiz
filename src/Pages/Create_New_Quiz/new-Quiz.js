import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Box, Dialog, DialogActions, DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import MCQSingle from "./MCQ-Single";
import CloseIcon from '@mui/icons-material/Close';

const Addquiz = () => {
  const [popup, setPopup] = useState(true);
  //this func is show the option 
  const popupfunc = () => {
    setPopup(false);
  };
  return (
    <Layout
    >
      <Box className="Box1"
        sx={{
          height: '30%',
          width: '50%',
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
            <Dialog open={true} aria-labelledby="responsive-dialog-title">
                <Box component="div" className="lt" sx={{ display: 'flex',justifyContent: 'end', marginTop: '5px' }}>
                  <CloseIcon />
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
                      ":hover": { bgcolor: "#4f7be9", color: "#fff" },
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
                      bgcolor: "#4f7be9",
                      color: '#fff',
                      ":hover": { bgcolor: "#4f7be9", color: "#fff" },
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
                      bgcolor: "#4f7be9",
                      color: '#fff',
                      ":hover": { bgcolor: "#4f7be9", color: "#fff" },
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
                      bgcolor: "#4f7be9",
                      color: '#fff',
                      ":hover": { bgcolor: "#4f7be9", color: "#fff" },
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
