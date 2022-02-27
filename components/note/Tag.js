import "../../styles/Tag.module.scss";

export default function Tag( { text } ) {
  return (
    <span className="tag">
      {`#${text}`}
    </span>
  );
}
