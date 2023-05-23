import s from "./CircledRadio.module.scss";

type CircledRadioProps = {
  id: string;
  value: number;
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
}: CircledRadioProps) {

  return (
    <label htmlFor={id} className={s.circled_radio}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span>{value}</span>
    </label>
  );
}
