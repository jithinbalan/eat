import Grid from "@mui/material/Grid";
import ProductReviewCard from "../components/Card/ProductCard";
import PinnedSubheaderList from "../components/Ingredients/Ingredients";
import Additives from "../components/Additives/Additives";
import Nutrition from "../components/Nutrition/Nutrition";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import "./Dashboard.css";

const Dashboard = (props) => {
  const { details, productAdditivesDetails } = props;
  
  return (
   
    <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
          <ProductReviewCard product={details.product} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
          <PinnedSubheaderList ingredients={details.product.ingredients} />
      </Grid>

      <Grid item  xs={12} sm={12} md={12} lg={12}>
        <Additives additives={productAdditivesDetails} />
      </Grid>
      <Grid item  xs={12} sm={6} md={6} lg={6}>
        {/* Conditional rendering for large screens */}
        {(matches) =>
          matches ? <Nutrition nutrition={productAdditivesDetails} /> : null
        }
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
  );
};

export default Dashboard;
