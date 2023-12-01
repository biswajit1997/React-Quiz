import React from "react";
import Layout from "../Layout/Layout";
import { Box, Stack, Paper } from "@mui/material";
import "../Home/HomeStyle.css";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import NewQuiz from "../../images/NewQuiz.jpg";
import MyQuiz from "../../images/MyQuiz.jpg";
import PlayQuiz from "../../images/PlayQuiz.jpg";

const Item = styled(Paper)(({ theme }) => ({
  height: "265px",
  width: "33vw",
  padding: theme.spacing(1),
  display: "flex",
}));

const Home = () => {
  return (
    <Layout>
      <Box className="Home-Box1" sx={{ p: 2 }}>
        <Stack
          direction="row"
          className="stack"
          sx={{
            display: { xs: 'block', sm: 'flex' },
            justifyContent: 'center', // Center horizontally
            alignItems: 'center',     // Center vertically
            height: '90vh',  
          }}
        >
          <Item
            className="content-box"
            sx={{
              // backgroundImage: `url(${NewQuiz})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px",
              border: '1px solid #000',
              "@media(max-width:600px)": {
                height: "250px",
                width: "300px",
                marginBottom: "20px",
              },
            }}
          >
            <Link to="/newquiz">Create New Quiz</Link>
          </Item>
          <Item
            className="content-box"
            sx={{
              maxWidth: "350",
              // backgroundImage: `url(${MyQuiz})`,
              border: '1px solid #000',
              backgroundSize: "cover",
              borderRadius: "20px",
              "@media(max-width:600px)": { height: "250px", width: "300px" },
            }}
          >
            <Link to="/Quiz">My Quizes</Link>
          </Item>
          {/* <Item
            className="content-box"
            sx={{
              maxWidth: "350",
              backgroundImage: `url(${PlayQuiz})`,
              backgroundSize: "cover",
              borderRadius: "20px",
              "@media(max-width:600px)": {
                height: "250px",
                width: "300px",
                marginTop: "20px",
              },
            }}
          >
            <Link to="/PlayQuiz">Play Quiz</Link>
          </Item> */}
        </Stack>
      </Box>
    </Layout>
  );
};

export default Home;
