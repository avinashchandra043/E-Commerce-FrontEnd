import React from "react";
import { Grid, Avatar, Box, Rating } from "@mui/material";

function ProductReviewCard({ review }) {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              {review?.user.firstName[0].toUpperCase()}
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">
                {review?.user.firstName} {review?.user.lastName}
              </p>
              <p className="opacity-70">
                {review?.createdAt &&
                  new Date(review.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
              </p>
            </div>
          </div>
          <Rating
            value={review?.rating.rating}
            name="half-rating"
            readOnly
            precision={0.5}
          />
          <p>{review?.review}</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductReviewCard;
