import Image from "next/image";

export default function ThankYouCard({ submitedRating }) {
  return (
    <div className="flex_column_center">
        <Image src="/illustration-thank-you.svg" alt="" width={162} height={108} />
      <h2>Thank you!</h2>
      <p>
        You selected <span>{submitedRating}</span> out of 5
      </p>
      <p>
        Thank you!
        <br />
        We appreciate you taking the time to give a rating. If you
        ever need more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
// width="162" height="108"