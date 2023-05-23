"use client";

import Image from "next/image";
import s from "./page.module.scss";
import { useEffect, useState } from "react";
import CircledRadio from "./CircledRadio";

type RatingCardProps = {
  handleSubmit: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function RatingCard({ handleSubmit }: RatingCardProps) {
  const [rating, setRating] = useState(null);
  
  useEffect(() => {
    console.log("rating: ", rating);
  }, [rating])
    

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  return (
    <>
      <div className={s.circle}>
        <Image src="/icon-star.svg" alt="" width={15} height={15} />
      </div>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All
        feedback is appreciated to help us improve our offering!
      </p>

      <div className="flex_space_between">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <CircledRadio
              key={i}
              id={`star-${i + 1}`}
              name="rating"
              value={`${i + 1}`}
              onChange={handleRatingChange}

              rating={rating}

              checked={rating === `${i + 1}`}
            />
          ))}
      </div>
      <button

        className={`${s.submit} border_radius_2 padding_0_75`}
        onClick={() => handleSubmit(rating)}
        disabled={!rating}
      >
        <span>Submit</span>
      </button>
    </>
  );
}

export default function Home() {
  const [submitedRating, setSubmitedRating] = useState<null | string>(
    null
  );

  console.log("submitedRating: ", submitedRating);

  const handleSubmit = (rating: any) => {

    setSubmitedRating(rating);
    console.log(rating);
  };

  useEffect(() => {
    setSubmitedRating(null);
  }, [])

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
          <div className="flex_column_center">
            <h2>Thank you!</h2>
            <p>
              You selected <span>{submitedRating}</span> out of 5
            </p>
            <p>
              Thank you!
              <br />
              We appreciate you taking the time to give a rating. If
              you ever need more support, don’t hesitate to get in
              touch!
            </p>
          </div>
        ) : (
          <RatingCard handleSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
}

// 1 2 3 4 5

// Submit

// <!-- Rating state end -->

// <!-- Thank you state start -->

// You selected <!-- Add rating here --> out of 5

// Thank you!

// We appreciate you taking the time to give a rating. If you ever need more support,
// don’t hesitate to get in touch!

// To ask:
