export const GifItem = ({ id, title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} className="card-img-top" />
      <div className="card-body">
        <p className="card-text">{title}</p>
      </div>
    </div>
  );
};
