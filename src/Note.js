export const Note = ({ id, title, body }) => {
  return (
    <li className="note">
      <h3 className="titleNote">
        <strong>{title}</strong>
      </h3>
      <p className="bodyNote">{body}</p>
    </li>
  );
};
