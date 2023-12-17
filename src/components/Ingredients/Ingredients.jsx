import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import image from "./Ingredient.png";
import { Box } from "@mui/material";
import "./Ingredients.css";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';


// Create a styled LinearProgress component with animation
const AnimatedLinearProgress = styled(LinearProgress)(({ theme }) => ({
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
    // Add a transition effect to the width of the bar
    transition: 'width 0.6s ease',
  },
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
}));

export default function AlignItemsList(props) {
  const { ingredients } = props;
  return (
    // <Card className="gradient-card">
    //   <CardHeader title={"Ingredients"} />
    //   <List
    //     className="gradient-card"
    //     sx={{ bgcolor: "background.paper", height: "337px", overflow: "auto" }}
    //   >
    //     {ingredients.map((ingredient, index) => (
    //       <ListItem alignItems="flex-start" key={index}>
    //       <Chip variant="soft" >


    //         <ListItemAvatar>
    //           <Avatar src={image}></Avatar>
    //         </ListItemAvatar>
    //         <ListItemText
    //           primary={
    //             ingredient.text.charAt(0).toUpperCase() +
    //             ingredient.text.slice(1)
    //           }
    //           secondary={
    //             <Box>
    //               <LinearProgress
    //                 variant="determinate"
    //                 value={Math.round(ingredient.percent_estimate)}
    //               />
    //               <Typography
    //                 sx={{ display: "inline" }}
    //                 component="span"
    //                 variant="body2"
    //                 color="text.primary"
    //               >
    //                 {`${Math.round(ingredient.percent_estimate)}%`}
    //               </Typography>
    //             </Box>
    //           }
    //         />
    //         </Chip>
    //       </ListItem>
    //     ))}
    //     <Divider variant="inset" component="li" />
    //   </List>
    // </Card>

    <Box sx={{ flexGrow: 1, padding: 2 }}>
       {/* Heading for the Additives Section */}
       <Typography variant="h5" component="h2" gutterBottom>
       Ingredients
      </Typography>
      {/* Grid Container for Additives */}
      <Grid container spacing={2}>
        {ingredients.map((ingredient, index) => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
            <Paper sx={{ padding: 2, display: 'flex', alignItems: 'center' }}>
              <Box sx={{ width: '100%', mr: 1 }}>
                <Typography variant="body2">
                  {ingredient.text.charAt(0).toUpperCase() +
                ingredient.text.slice(1)}
                </Typography>
                <AnimatedLinearProgress 
                  variant="determinate" 
                  value={Math.round(ingredient.percent_estimate)} 
                  sx={{ height: 10, borderRadius: 5}} 
                />
              </Box>
              <Box minWidth={35}>
                <Typography variant="body2">{`${Math.round(
                  ingredient.percent_estimate,
                )}%`}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
