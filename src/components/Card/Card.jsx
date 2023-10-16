import "./Card.css";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutLinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlined from "@mui/icons-material/MonetizationOnOutlined"; 

const Card = (props) => {


  return (
    <div className="card">
      <div className="left">
            {/* <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "ZMK"} {amount}</span>
            <span className="link">{data.link}</span> */}
      </div>
      <div className="right">
            <div className="percentage positive">
              {/* <KeyboardArrowUp /> */}
              %
            </div>
      </div>
    </div>
  );

}

export default Card