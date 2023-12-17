import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';


export default function Additives(props) {
    const {nutrition} = props;
  return (
    <>
        <Typography variant="h5">Nutrition</Typography>
        <Box sx={{ p:2 }}>
        {
          // nutrition !== null ? (
          //   Object.keys(nutrition).map((additive,index)=>(
          //     <Accordion key={index}>
          //       <AccordionSummary
          //         expandIcon={<ExpandMoreIcon />}
          //         aria-controls="panel1a-content"
          //         id="panel1a-header"
          //       >
          //         <Typography>{additives[additive].title_element.title}</Typography>
          //       </AccordionSummary>
          //       <AccordionDetails>
          //         {additives[additive]?.elements[0]?.text_element?.html &&
          //           <Typography dangerouslySetInnerHTML={{  __html: additives[additive]?.elements[0]?.text_element?.html }}/>
          //         }
          //       </AccordionDetails>
          //     </Accordion>
          //   ))
          // ):
          // (<Typography variant="h6">No Additives found</Typography>)
        }
        </Box>
    </>
  );
}
