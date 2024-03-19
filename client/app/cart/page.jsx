'use client'
import Link from "next/link";
import { LiaChevronCircleRightSolid } from "react-icons/lia";
import { useDispatch, useSelector } from 'react-redux';
import { GoTrash } from "react-icons/go";
import { removeProduct } from "@/lib/features/cart/cartSlice";


const Cart = () => {
    const dispatch = useDispatch();
    const carts = useSelector(state => state.cart.cart);
    console.log(carts);

    const handleRemoveProductFromCart = async(cart) => {
        dispatch(removeProduct(cart));
        // console.log(cart)
    }

    return ( 
        <div className="margin-component mt-[31px] flex flex-col gap-5">
            {carts && carts.length > 0 ? (
                <div className="w-full h-full">
                    <div className="flex items-center gap-5 justify-center w-full h-1/6 py-8">
                        <span className="text-xl font-semibold text-[#ff9b49]"> Shopping Cart</span>
                        <span className="text-xl"><LiaChevronCircleRightSolid /></span>
                        <span className="text-xl font-semibold"> Checkout</span>
                        <span className="text-xl"><LiaChevronCircleRightSolid /></span>
                        <span className="text-xl font-semibold"> Order Complete</span>
                    </div>
                    <div className="flex gap-5 w-full h-5/6">
                        <table className="w-9/12 h-full table-auto  border-2">
                                <thead className="w-full h-1/6 bg-slate-200">
                                    <tr className="w-full h-full">
                                        <th className="w-1/5 text-xl">Product</th>
                                        <th className="w-1/5 text-xl">Name</th>
                                        <th className="w-1/5 text-xl">Quantity</th>
                                        <th className="w-1/5 text-xl">Price</th>
                                        <th className="w-1/5 text-xl">Remove</th>
                                    </tr>
                                </thead>
                                <tbody className="w-full h-5/6 ">
                                    {carts.map(cart => (
                                        <tr className="w-full border-b-2" key={cart.item._id}>
                                            <td className="w-1/5 text-center "><img src={`${process.env.NEXT_PUBLIC_API_UPLOAD}/${cart.item.name}/${cart.item.images[0]}`} alt="image" /></td>
                                            <td className="w-1/5 text-center">{cart.item.name}</td>
                                            <td className="w-1/5 text-center">{cart.quantity}</td>
                                            <td className="w-1/5 text-center">{cart.total} <span className="text-xl font-semibold text-red-500">$</span></td>
                                            <td className="w-1/5 text-center" ><div className="flex items-center justify-center cursor-pointer" onClick={() => handleRemoveProductFromCart(cart)}><GoTrash className="bg-slate-200 p-5 h-16 w-16 rounded-full hover:bg-red-500 hover:text-white" /></div></td>
                                        </tr>
                                    ))}
                                </tbody>
                        </table>
                        <div className="flex flex-col gap-5 bg-gray-100 h-full w-3/12 p-5 rounded-lg">
                                <div className="flex items-center w-full h-1/2 justify-between">
                                    <div className="text-lg font-semibold">Total:</div>
                                    <div className="flex text-lg font-semibold"><span className="text-red-700">Total</span>$</div>
                                </div>
                                <div className="flex items-center gap-4 w-full h-1/2 justify-between ">
                                    <Link href={'/'} className="text-white bg-red-500 hover:bg-red-700 outline-1 rounded-full py-2 w-1/2 text-center font-semibold">
                                        Continue Order
                                    </Link>
                                    <button  className="rounded-full p-2 w-1/2 bg-[#faa13c] text-white hover:bg-[#fa883c] font-semibold">Check Out</button>
                                </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>No Product</div>
            )}
        </div>
     );
}
 
export default Cart;