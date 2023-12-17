import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ScanningModal from "../components/Scanner/ScanningModal";
import Dashboard from "./DashBoard";
import axios from "axios";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add"; // Import a specific icon

import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";

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
      getItem();
    };
  }, []);

  useEffect(() => {
    return () => {
      if (
        productHighLevelDetails !== undefined &&
        productHighLevelDetails !== null
      ) {
        const filteredKeys = Object.keys(productHighLevelDetails).filter(
          (key) => key.startsWith("additive_en:")
        );
        // Constructing a new object based on the filtered keys
        const productHighLevelDetailsObj = filteredKeys.reduce((acc, key) => {
          acc[key] = productHighLevelDetails[key];
          return acc;
        }, {});
        setProductAdditivesDetails(productHighLevelDetailsObj);
      }
    };
  }, [productDetails, globalAdditivesDetails, productHighLevelDetails]);

  async function getAdditivesFact() {
    try {
      const response = await axios.get(
        `https://facets-kp.openfoodfacts.org/knowledge_panel?facet_tag=additives&value_tag=en:e967&lang_code=en&country=uk`
      );
      setAdditivesFactDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const onDetected = async (result) => {
    setOpen(false);
    setResult(result);
    await getItem(result);
    await getItemHighLevelDetails(result);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getItem = async (itemId) => {
    try {
      const response = await axios.get(
        `https://world.openfoodfacts.org/api/v2/product/${itemId}.json`
      );
      setProductDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getItemHighLevelDetails = async (itemId) => {
    try {
      const response = await axios.get(
        `https://world.openfoodfacts.org/api/v2/product/${itemId}?fields=knowledge_panels`
      );
      setProductHighLevelDetails(response.data.product.knowledge_panels);
    } catch (error) {
      console.error(error);
    }
  };
  // useEffect(() => {
  //   async function fetchData() {
  //     await getItem();
  //     await getItemHighLevelDetails();
  //   }
  //   fetchData();
  // }, []);

  return (
    <>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <ScanningModal
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          onDetected={onDetected}
        />
        {productDetails?.status ? (
          <Dashboard
            details={productDetails}
            productAdditivesDetails={productAdditivesDetails}
          />
        ) : (
          `Please scan your item`
        )}
      </Box>
      <Fab
        color="primary"
        variant="extended"
        aria-label="add"
        onClick={handleClickOpen}
        sx={{
          position: "fixed", // Position the FAB fixed relative to the viewport
          bottom: 16, // Space from bottom (theme spacing units will be applied)
          right: 16, // Space from right (theme spacing units will be applied)
          zIndex: 1000, // Ensure it sits on top of other elements
        }}
      >
        {open ? <> Scanning <QrCodeScannerIcon /> </>: <> Scan BarCode <QrCodeScannerIcon /> </>}
      </Fab>
    </>
  );
}

export default ScanLayout;
