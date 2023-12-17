import { RadioBox } from "./RadionButton.styles";

type Props = {
    icon: string;
    label: string;
    isActive: boolean;
}

function RadioButton({ icon, label, isActive }: Props) {
    return <RadioBox
        type="button"
        isActive={true}
        activeColor={`${isActive ? 'green' : 'red'}`}
        onClick={() => { }}
    >
        <img src={icon} alt={label} />
        <span>{label}</span>
    </RadioBox>
}

export default RadioButton;