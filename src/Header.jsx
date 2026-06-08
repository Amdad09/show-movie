import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import moon from './assets/icons/moon.svg';
import sun from './assets/icons/sun.svg';
import logo from './assets/logo.svg';
import ring from './assets/ring.svg';
import cart from './assets/shopping-cart.svg';
import CartDetails from './cine/CartDetails';
import { movieContext } from './context';

export default function Header({ dark, toggleDark }) {
    const [showCart, setShowCart] = useState(false);
    const { cartData, setCartData } = useContext(movieContext);

    const handleDelete = (movieId) => {
        setCartData((pre) => {
            return pre.filter((cart) => cart.id !== movieId);
        });
        toast.success(`Success remove from Cart!`);
    };

    return (
        <>
            {showCart && (
                <CartDetails
                    cartData={cartData}
                    onDelete={handleDelete}
                    onClose={() => setShowCart((pre) => !pre)}
                />
            )}
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img src={logo} width="139" height="26" alt="" />
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a
                            className="bg-[#00D991]/20 dark:bg-[#00D991]/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            href="#"
                        >
                            <img src={ring} width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={toggleDark}
                            className="bg-[#00D991]/20 dark:bg-[#00D991]/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                        >
                            <img
                                src={dark ? sun : moon}
                                width="24"
                                height="24"
                                alt=""
                            />
                        </a>
                    </li>
                    <li>
                        <div className="indicator">
                            {cartData.length > 0 && (
                                <span className="indicator-item w-5 h-5 rounded-full bg-[#00D991] text-white text-xs flex items-center justify-center">
                                    {cartData.length}
                                </span>
                            )}

                            <button
                                onClick={() => setShowCart(true)}
                                className="bg-green-200 rounded-lg p-1"
                            >
                                <img src={cart} width="24" height="24" alt="" />
                            </button>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );
}
