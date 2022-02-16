import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GridGifItem = ({ query }) => {
  const { data: images, loading } = useFetchGifs(query);

  const q = query === "" ? "trending" : query;

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{q}</h3>
      <div className="card-columns">
        {loading && (
          <p className="animate__animated animate__flash">Loading...</p>
        )}
        <div className="card-grid">
          {images.map((img, index) => (
            <GifItem key={index} {...img} />
          ))}
        </div>
      </div>
    </>
  );
};
