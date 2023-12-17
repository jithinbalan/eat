import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

export default function Additives(props) {
  const { additives } = props;
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      {/* Heading for the Additives Section */}
      <Typography variant="h5" component="h2" gutterBottom>
        Additives
      </Typography>
      {additives !== null ? (
        Object.keys(additives).map((additive, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{additives[additive].title_element.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {additives[additive]?.elements[0]?.text_element?.html && (
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      additives[additive]?.elements[0]?.text_element?.html,
                  }}
                />
              )}
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Typography variant="h6">No Additives found</Typography>
      )}
    </Box>
  );
}
