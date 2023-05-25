"use client";

import s from "./page.module.scss";
import { useEffect, useState } from "react";
import RatingCard from "./RatingCard";
import ThankYouCard from "./ThankYouCard";

export default function Home() {
  const [submitedRating, setSubmitedRating] = useState<null | number>(
    null
  );

  const handleSubmit = (rating: number) => {
    setSubmitedRating(rating);
  };

  // useEffect(() => {
  //   setSubmitedRating(null);
  // }, []);

  return (
    <div className={`${s.page} grid_center`}>
      <div
        className={`
        ${s.card}
        border_radius_1
        padding_1_5
        flow
        `}
      >
        {submitedRating ? (
          <ThankYouCard submitedRating={submitedRating} />
        ) : (
          <RatingCard handleSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
}
