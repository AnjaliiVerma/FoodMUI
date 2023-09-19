import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
      <Box 
        sx={{
          my:5,
          ml:10,
          
          p:2,
          textAlign:"center",
          "& h4":{
            fontWeight:"bold",
            mb:2,
            fontSize:"1.5rem",
          },
          "& p":{
            fontSize:"1rem",
            textAlign:"justify"
          }

        }} 
      >
        <Typography variant="h4">
            Contact My Restaurant
          </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima porro
          iusto in earum, laboriosam blanditiis iste nostrum, consectetur atque,
          debitis doloremque beatae id sunt corporis dolore tempora ipsam.
          Eveniet libero fugiat velit magni ea, exercitationem numquam similique
          vero harum nemo, cum temporibus laborum commodi, cupiditate maiores
          fugit sequi. Corporis, vel!
        </p>
      </Box>
      <Box sx={{m:3,width:"600px", ml:10,
      "@media (max-width:600px)":{
        width:"300px",
      }
    }}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black', color:'white', }} align="center"> Conatct Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon  sx={{color:'red', pt:1,}}/>
                  1800-00-0000
                  (toll-free)
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <MailIcon sx={{color:'skyblue', pt:1,}} /> myrestaurent@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <CallIcon sx={{color:'green', pt:1,}} /> 9874563210 
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
