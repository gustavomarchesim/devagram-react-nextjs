export default function Button({
  type = "button",
  text,
  cor = "primaria",
  disabled = false,
  onClick,
}) {
  return (
    <button
      type={type}
      className={`btn ${cor}`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
