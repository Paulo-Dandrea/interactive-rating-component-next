import Image from "next/image";
import s from "./page.module.scss";

export default function Home() {
  return (
    <div className={s.page}>
      <div
        className={`
        ${s.card}
        ${s.border_radius_1}
        ${s.padding_1_5}
        ${s.flow}
        `}
      >
        <div className={s.circle}>
          <Image src="/icon-star.svg" alt="" width={15} height={15} />
        </div>
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All
          feedback is appreciated to help us improve our offering!
        </p>

        <div className={s.flex_space_between}>
          <div className={s.circle}>
            <input type="radio" id="star1" name="rating" value="1" />
            <label htmlFor="star1">
              <span>1</span>
            </label>
          </div>
          <div className={s.circle}>
            <input type="radio" id="star2" name="rating" value="2" />
            <label htmlFor="star2">
              <span>2</span>
            </label>
            </div>
          
        </div>
        <button
          className={`${s.submit} ${s.border_radius_2} ${s.padding_0_75}`}
        >
          <span>Submit</span>
        </button>
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
