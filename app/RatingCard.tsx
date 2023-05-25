import { ChangeEvent, useEffect, useState } from "react";
import CircledRadio from "./CircledRadio";
import s from "./page.module.scss";
import Image from "next/image";


type RatingCardProps = {
  handleSubmit: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function RatingCard({ handleSubmit }: RatingCardProps) {
  const [rating, setRating] = useState<number | null>(null);

  useEffect(() => {
    console.log("rating: ", rating);
  }, [rating]);

  const handleRatingChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setRating(Number(event.target.value));
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
              value={i + 1}
              onChange={handleRatingChange}
              checked={rating === i + 1}
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
