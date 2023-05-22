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
}: CircledRadioProps) {
  return (
    <div className={s.circle}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>
        <span>{value}</span>
      </label>
    </div>
  );
}
