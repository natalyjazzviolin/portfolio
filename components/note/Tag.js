import "../../styles/Tag.module.scss";

export default function Tag( { text, color } ) {

  return (
    <span className="tag" style={{ backgroundColor: color }}>
      {`#${text}`}
    </span>
  );
}
