import React from "react";
import { IconButton, Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { removeCartItem, updateCartItem } from "../../../Action/cartAction";
import { connect } from "react-redux";
const CartItem = ({ item }) => {
  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item._id,
    };
    updateCartItem(data);
  };

  const handleRemoveCartItem = () => {
    removeCartItem(item._id);
  };
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item?.product.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item?.product.title}</p>
          <p className="opacity-70">
            Size: {item?.size},{item?.product.color}
          </p>
          <p className="opacity-70 mt-2">Seller: asdfasdfasd fasdfasdf</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">₹{item?.discountedPrice}</p>
            <p className="opacity-50 line-through">₹{item?.price}</p>
            <p className="text-green-600 font-semibold">
              {Math.floor(
                ((item?.price - item?.discountedPrice) / item?.price) * 100
              )}
              % off
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton
            onClick={() => handleUpdateCartItem(-1)}
            disabled={item?.quantity <= 1}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{item?.quantity}</span>
          <IconButton
            sx={{ color: "rgb(145,85,253)" }}
            onClick={() => handleUpdateCartItem(1)}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button
            sx={{ color: "rgb(145,85,253)" }}
            onClick={handleRemoveCartItem}
          >
            remvoe
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authReducer }) => ({
  jwt: authReducer.jwt,
});

export default connect(mapStateToProps)(CartItem);
