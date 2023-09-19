import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box 
        sx={{
          my:15,
          p:2,
          textAlign:"center",
          "& h4":{
            fontWeight:"bold",
            my: 2,
            p:2,
            fontSize:"2rem"
          },
          "& p":{
            textAlign:"justify",
          },
          "@media (max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:"1.5rem",
            },
          }
      }}>
        <Typography variant="h4">Welcome to My Restaurant</Typography>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis odio
          illo suscipit deleniti commodi quasi corporis ipsam. Ipsam repudiandae
          ipsum incidunt sunt recusandae praesentium, nisi laudantium, quam
          eveniet fugit ad id voluptates soluta, officia accusamus itaque
          architecto. Repudiandae modi, optio provident facilis dolor culpa id,
          earum quod error quos, tempore a voluptatum animi sit ullam? Amet
          vitae aperiam voluptates modi explicabo beatae dolores quas magnam
          veritatis pariatur rem, saepe necessitatibus ad accusantium dolore
          ratione eaque nostrum nulla quia voluptatem autem itaque mollitia
          excepturi facilis. Facere, labore atque! Voluptatem voluptatibus,
          rerum alias ex saepe cum sequi itaque ipsam temporibus rem quod? ipsum
          dolor sit amet consectetur adipisicing elit. Earum, non?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
          veniam deserunt facilis dignissimos incidunt eos eaque rerum vel
          voluptatem debitis suscipit fugiat similique neque, aspernatur a, nam
          quibusdam maxime itaque optio odit ad dicta! Ipsam autem veritatis
          deserunt. Adipisci, facilis? Aliquid placeat iste eligendi consequatur
          quas accusamus, quia ad praesentium. Ipsam voluptatum laudantium
          placeat maiores fugiat animi aut omnis distinctio aspernatur ut nihil
          eveniet architecto, dolore quos amet sequi adipisci rerum atque
          molestiae quaerat ab? Eaque, placeat? Officia repellat minima amet
          vel, provident veritatis nam nesciunt atque debitis numquam mollitia
          soluta, sed consectetur error dolorem totam quasi ratione dolorum
          commodi.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
