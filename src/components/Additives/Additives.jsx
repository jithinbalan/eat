import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';


export default function Additives(props) {
    const {additives} = props;
    console.log('additives',additives)
    
  return (
    <>
        <Typography variant="h5">Additives</Typography>
        <Box sx={{ p:2 }}>
        {
          additives !== null ? (
            Object.keys(additives).map((additive,index)=>(
              <Accordion key={index}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                  <Typography>{additives[additive].title_element.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography dangerouslySetInnerHTML={{  __html: additives[additive].elements[0].text_element.html }}>
                  {/* {additives[additive].elements[0].text_element.html} */}
                </Typography>
                {/* <Typography>
                  Vegetarian : { additive.vegetarian.en }
                </Typography> */}
                </AccordionDetails>
              </Accordion>
            ))
          ):
          (<Typography variant="h6">No Additives found</Typography>)
        }
        </Box>
    </>
  );
}
