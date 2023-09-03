function MovieCard({ title, poster, imdb_rating, year }) {
  return (
    <div>
      <img src="{poster}" alt="{title}" />
      <h2>{title}</h2>
    </div>
  );
}

export default MovieCard;
