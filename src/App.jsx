import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import MoviesList from './cine/MoviesList';
import { data } from './data/movies';
import { movieContext } from './context';
import { Toaster } from 'react-hot-toast';
function App() {
    const [movies, setMovies] = useState(data);
    const [cartData, setCartData] = useState([]);
    const [dark, setDark] = useState(true);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
    }, [dark]);


    return (
        <div className="dark:bg-[#1D1E28] bg-white font-[Sora] dark:text-white text-[#171923] ">
            <div className="max-w-11/12 mx-auto">
                <Toaster />
                <movieContext.Provider value={{ cartData, setCartData }}>
                    <Header
                        dark={dark}
                        toggleDark={() => setDark((pre) => !pre)}
                    />
                    <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                        <Sidebar />
                        <MoviesList movies={movies} />
                    </div>
                    <Footer />
                </movieContext.Provider>
            </div>
        </div>
    );
}

export default App;
