export const Contact = ({ id, name, number }) => {
  return (
    <li className="contact">
      <h3>
        <strong>{name}</strong>
      </h3>
      <span>{number}</span>
    </li>
  );
};
