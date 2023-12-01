import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Box, Dialog, DialogActions, DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import MCQSingle from "./MCQ-Single";

const Addquiz = () => {
  const [popup, setPopup] = useState(true);
  //this func is show the option 
  const popupfunc = () => {
    setPopup(false);
  };
  return (
    <Layout>
      <Box className="Box1"
       sx = {{
        height: '30%',
        width: '50%',
      }}
      >
        {popup ? (
          <Box className="Box2"
          sx = {{
            height: '30%',
            width: '50%',
          }}
          >
            <Dialog open={true}
           
             aria-labelledby="responsive-dialog-title">
              <DialogTitle
                id="responsive-dialog-title"
                sx={{ bgcolor: "#fff",
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
                }}
              >
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
