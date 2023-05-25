import Image from "next/image";
import s from "./ThankYouCard.module.scss";

export default function ThankYouCard({ submitedRating }) {
  return (
    <div className="flow grid_center txt_align_center">
      <Image
        src="/illustration-thank-you.svg"
        alt=""
        width={162}
        height={108}
      />
      <div
        className={`
        ${s.grey_pill} padding_top_bottom_1  padding_side_1 border_radius_2
        `}
      >
        <p>You selected {submitedRating} out of 5</p>
      </div>
      <h2>Thank you!</h2>

      <p>
        We appreciate you taking the time to give a rating. If you
        ever need more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
