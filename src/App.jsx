import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import MoviesList from './cine/MoviesList';
import { data } from './data/movies';

function App() {
    const [movies, setMovies] = useState(data);

    return (
        <div className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
            <Header />
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar />
                <MoviesList movies={movies} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
