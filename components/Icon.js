function Icon({ className, onClick, icon }) {
  return (
    <svg className={className} onClick={onClick}>
      <use href={icon} />
    </svg>
  );
}
export default Icon;
