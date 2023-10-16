import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import image from './Ingredient1.png'
export default function AlignItemsList(props) {
    const {ingredients} =props;
  return (
    <Card>
        <CardHeader
        title={"Ingredients"}
      />
        <List sx={{ bgcolor: 'background.paper' ,height:'337px' ,overflow:'auto'}}>
            {ingredients.map((ingredient,index)=>(
                <ListItem alignItems="flex-start" key={index}>
                    <ListItemAvatar>
                        <Avatar src={image}></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                    primary={ingredient.text.charAt(0).toUpperCase() + ingredient.text.slice(1)}
                    secondary={
                        <React.Fragment sx={{ display:'flex' }}>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                        Percent Estimate :  {ingredient.percent_estimate}
                        </Typography>
                        
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                        Percent Max :  {ingredient.percent_max}
                        </Typography>
                        </React.Fragment>
                    }
                    />
                </ListItem>
            ))}
            {/* <Divider variant="inset" component="li" /> */}
        </List>
    </Card>
  );
}
