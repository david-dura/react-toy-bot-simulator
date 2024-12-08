export default function DisplayInfo({ title, contents, ...props }) {
  return (
    <div {...props}>
      <h2>{title}</h2>
      <ul>
        {contents.map((description) => (
          <li key={description}>{description}</li>
        ))}
      </ul>
    </div>
  );
}
