import React from "react";
import { Stepper, StepLabel, Step } from "@mui/material";

const steps = [
  "Placed",
  "Orders Confirmed",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];
const OrderTracker = ({ activeStep }) => {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step>
            <StepLabel sx={{ color: "#9155FD", fontSize: "44px" }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;
