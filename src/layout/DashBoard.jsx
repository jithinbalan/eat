import Grid from '@mui/material/Grid';
import ProductReviewCard from '../components/Card/ProductCard'
import PinnedSubheaderList from '../components/Ingredients/Ingredients'
import Additives from '../components/Additives/Additives'
import "./Dashboard.css"


const Dashboard = (props) => {
  const {details,productAdditivesDetails } = props;
  return (
    <Grid container spacing={2}>
    
    <Grid item xs={4} md={6}>
         <ProductReviewCard product={details.product}/>
    </Grid>
      <Grid item xs={4} md={6}>
        <PinnedSubheaderList ingredients={details.product.ingredients}/>
      </Grid>
      
      <Grid item xs={12} md={12}>
        <Additives additives={productAdditivesDetails}/>
      </Grid>
    </Grid>
    // <Grid container spacing={2}>
    //   <Grid item xs={6} md={6}>
    //     <ProductReviewCard product={details.product}/>
    //   </Grid>
    //   <Grid item xs={6} md={6}>
    //     <PinnedSubheaderList/>
    //   </Grid>
    // </Grid>
  )
}

export default Dashboard