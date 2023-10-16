import React,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ScanningModal from '../components/Scanner/ScanningModal'
import Dashboard from './DashBoard'
import axios from 'axios';

function ScanLayout() {
  const [open, setOpen] = React.useState(false);
  const [result, setResult] = useState(null);
  const [productDetails, setProductDetails] = useState(null);
  const [productHighLevelDetails, setProductHighLevelDetails] = useState(null);
  const [globalAdditivesDetails, setGlobalAdditivesDetails] = useState(null);
  const [productAdditivesDetails, setProductAdditivesDetails] = useState(null);
  const [additivesFactDetails, setAdditivesFactDetails] = useState(null);


  useEffect(() => {
    return () => {
      if ( productHighLevelDetails !== undefined && productHighLevelDetails !== null) {
        // const productAdditives = productDetails.product.additives_original_tags
        
        // const filteredAdditives = Object.keys(productHighLevelDetails)
        //           .filter(eNumber => productAdditives.includes(eNumber))
        //           .map(eNumber => globalAdditivesDetails[eNumber]);

        // setProductAdditivesDetails(productHighLevelDetailsObj)
        // Filtering keys that start with 'xyz'
        const filteredKeys = Object.keys(productHighLevelDetails).filter(key => key.startsWith('additive_en:'));
        // console.log('filteredKeys',filteredKeys)
        
        // Constructing a new object based on the filtered keys
        const productHighLevelDetailsObj = filteredKeys.reduce((acc, key) => {
          acc[key] = productHighLevelDetails[key];
          return acc;
        }, {});
       
        setProductAdditivesDetails(productHighLevelDetailsObj)

        // console.log('newObj',newObj)

      }
    }
  }, [productDetails,globalAdditivesDetails,productHighLevelDetails])
  
  useEffect(() => {
    return () => {
      // getAdditives();
      // getAdditivesFact()
    }
  }, [])


  async function getAdditivesFact() {
    try {
      const response = await axios.get(`https://facets-kp.openfoodfacts.org/knowledge_panel?facet_tag=additives&value_tag=en:e967&lang_code=en&country=uk`);
      setAdditivesFactDetails(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  
  async function getAdditives() {
    try {
      const response = await axios.get(`https://static.openfoodfacts.org/data/taxonomies/additives.json`);
      setGlobalAdditivesDetails(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  const onDetected = result => {
    setOpen(false);
    setResult(result);
    getItem(result);
    getItemHighLevelDetails(result);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function getItem(itemId) {
    try {
      const response = await axios.get(`https://world.openfoodfacts.org/api/v2/product/${itemId}.json`);
      setProductDetails(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  async function getItemHighLevelDetails(itemId) {
    try {
      const response = await axios.get(`https://world.openfoodfacts.org/api/v2/product/${itemId}?fields=knowledge_panels`);
      setProductHighLevelDetails(response.data.product.knowledge_panels)
    }
     catch (error) {
      console.error(error);
    }
  }


  return (
    
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
          <ScanningModal  open={open} handleClickOpen={handleClickOpen}  handleClose={handleClose} onDetected={onDetected} />
          {productDetails?.status  ?
            <Dashboard details={productDetails} productAdditivesDetails={productAdditivesDetails} /> : `Please scan your item`
          }
        <div className='scan-button'>
          <Button variant="contained" onClick={handleClickOpen}> {open ? "Stop" : "Start"}</Button>
        </div>
      </Box>
  );
}

export default ScanLayout;