import MovieCard from './MovieCard';

export default function MoviesList({ movies }) {
    return (
        <div class="content">
            <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}
