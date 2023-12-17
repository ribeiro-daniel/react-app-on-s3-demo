const Button = ({ label, onClick }: { label?: string, onClick?: (e: any) => void }) => (
    <button onClick={onClick}>{label}</button>
);

export default Button;