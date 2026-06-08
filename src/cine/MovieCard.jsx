import { getImageUrl } from "../utils/cine-utils";
import tag from '../assets/tag.svg'

import Rating from "./Rating";
import { useContext, useState } from "react";
import MovieDetailsModal from "./MovieDetailsModal";
import { movieContext } from "../context";
import toast from "react-hot-toast";

export default function MovieCard({ movie }) {
    const { title, cover, rating, price, genr } = movie;
    const [openModal, setOpenModal] = useState(false);
    const { cartData, setCartData } = useContext(movieContext);

    const handleAddToCart = (movie) => {
        const found = cartData.find(cart => {
            return cart.id === movie.id
        })
        if (!found) {
            setCartData([...cartData, movie]);    
            toast.success(`${movie.title} movie is added!!`)
        } else {
            toast.error(`Already added ${movie.title} movie at the cart`)
        }
    }

    return (
        <>
            {openModal && <MovieDetailsModal onAddToCart={handleAddToCart} movie={movie} onCancleModal={()=>setOpenModal(false)} />}

            <figure onClick={()=>setOpenModal(true)} className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <img
                    className="w-full object-cover"
                    src={getImageUrl(cover)}
                    alt=""
                />
                <figcaption className="pt-4">
                    <h3 className="text-xl mb-1">{title}</h3>
                    <p className="text-[#575A6E] text-sm mb-2">{genr}</p>
                    <Rating rating={rating} />
                    <a onClick={e => {
                        e.stopPropagation()
                        handleAddToCart(movie)
                    }}
                        className="bg-[#00D991] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                        
                    >
                        <img src={tag} alt="" />
                        <span>${price} | Add to Cart</span>
                    </a>
                </figcaption>
            </figure>
        </>
    );
}