import React from "react";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { LinkedIn, Mail } from "@mui/icons-material";

const Contact = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>
      <Navbar />
      <h1
        style={{
          fontFamily: ["cursive"],
          padding: "0 10px",
          marginTop: "30px",
          marginBottom: "30px",
          textAlign: "center",
          fontSize: "50px",
        }}
      >
        Contact
      </h1>

      <Box m="20px">
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="220px"
          gap="20px"
        >
          <Box
            gridColumn="span 4"
            gridRow="span 1"
            backgroundColor={colors.primary[400]}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <img
                src="../../assets/Akash.jpg"
                alt="Description"
                style={{ width: "170px", height: "auto" }}
              />
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
                sx={{ ml: 5, mt: 0, flexGrow: 1 }}
              >
                Akash Yadav
              </Typography>
              {/* <LinkedIn style={{ fontSize: 30, color: colors.grey[100] }} />
              <Mail style={{ fontSize: 30, color: colors.grey[100] }} /> */}
            </Box>
          </Box>

          <Box
            gridColumn="span 4"
            gridRow="span 1"
            backgroundColor={colors.primary[400]}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <img
                src="../../assets/Aryan.jpg"
                alt="Description"
                style={{ width: "170px", height: "auto" }}
              />
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
                sx={{ ml: 5, mt: 0, flexGrow: 1 }}
              >
                Aryan Gupta
              </Typography>
            </Box>
          </Box>

          <Box
            gridColumn="span 4"
            gridRow="span 1"
            backgroundColor={colors.primary[400]}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <img
                src="../../assets/Bhushan.jpg"
                alt="Description"
                style={{ width: "170px", height: "auto" }}
              />
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
                sx={{ ml: 5, mt: 0, flexGrow: 1 }}
              >
                Bhushan Bobade
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box m="20px">
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="220px"
          gap="20px"
        >
          <Box gridColumn="span 2"></Box>
          <Box
            gridColumn="span 4"
            gridRow="span 1"
            backgroundColor={colors.primary[400]}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <img
                src="../../assets/Dhruv.jpg"
                alt="Description"
                style={{ width: "170px", height: "auto" }}
              />
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
                sx={{ ml: 10, mt: 0, flexGrow: 1 }}
              >
                Dhruv Pratap Singh
              </Typography>
            </Box>
          </Box>

          <Box
            gridColumn="span 4"
            gridRow="span 1"
            backgroundColor={colors.primary[400]}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <img
                src="../../assets/Ram.jpg"
                alt="Description"
                style={{ width: "170px", height: "auto" }}
              />
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
                sx={{ ml: 10, mt: 0, flexGrow: 1 }}
              >
                Ram Kumar Mishra
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </div>
  );
};

export default Contact;
