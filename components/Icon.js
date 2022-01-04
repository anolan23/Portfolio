import Link from 'next/link';

function Icon({ className, onClick, icon, href }) {
  if (href) {
    return (
      <Link href={href}>
        <a target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
          <svg className={className} onClick={onClick}>
            <use href={icon} />
          </svg>
        </a>
      </Link>
    );
  }
  return (
    <svg className={className} onClick={onClick}>
      <use href={icon} />
    </svg>
  );
}
export default Icon;
