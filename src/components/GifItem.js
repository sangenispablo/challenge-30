export const GifItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} className="card-img-top" />
      <div className="card-body">
        <p className="card-text">{title}</p>
      </div>
    </div>
  );
};
