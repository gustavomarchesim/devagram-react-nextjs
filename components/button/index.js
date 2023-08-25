export default function Button({
  type = "button",
  text,
  cor = "primaria",
  desabilitado = false,
  onClick,
}) {
  return (
    <button
      type={type}
      className={`btn ${cor}`}
      disabled={desabilitado}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
