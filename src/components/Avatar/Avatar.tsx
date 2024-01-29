import './Avatar.css';

function Avatar(/* props */ { photo, name = '', isOnline = false }) {
  const status = isOnline ? '온라인' : '오프라인';
  return (
    <>
      <figure className="Avatar">
        <img src={photo} alt={name} />
        <figcaption
          className={isOnline ? 'online' : ''}
          aria-label={status}
          title={status}
        ></figcaption>
      </figure>
    </>
  );
}
export default Avatar;

// HTML -> JSX -> DATA
// Markup -> Component Design (Design)
