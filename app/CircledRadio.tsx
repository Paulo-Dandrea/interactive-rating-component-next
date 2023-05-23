import s from "./CircledRadio.module.scss";

type CircledRadioProps = {
  id: string;
  value: string;
  name: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CircledRadio({
  id,
  value,
  name,
  checked,
  onChange,

  rating
}: CircledRadioProps) {
  // console.log("checked: ", checked);
  // console.log("value: ", value);

  console.log("rating: ", rating);
  console.log("value: ", value)
  console.log("rating === value: ", rating === value);
  

  return (
    <label htmlFor={id} className={s.circled_radio}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        // checked={checked}
        checked={rating === value}
        onChange={onChange}
      />
      <span>{value}</span>
    </label>
  );
}
