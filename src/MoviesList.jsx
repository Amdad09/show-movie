import Movie from './Movie';

export default function MoviesList({movies}) {
    return (
        <div class="content">
            <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {movies.map((movie) => (
                    <Movie key={movie.id} movie={movie } />
                ))}
            </div>
        </div>
    );
}
