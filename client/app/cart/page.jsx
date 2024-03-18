import Link from "next/link";
import { LiaChevronCircleRightSolid } from "react-icons/lia";

const Cart = () => {
    return ( 
        <div className="margin-component mt-[31px] flex gap-2">
            <div className="flex flex-col h-full w-9/12  ">
                <div className="flex w-full h-1/6 items-center gap-5 p-2">
                    <span className="text-xl hover:text-[#ff9b49] font-semibold"> Shopping Cart</span>
                    <span className="text-xl"><LiaChevronCircleRightSolid /></span>
                    <span className="text-xl hover:text-[#ff9b49] font-semibold"> Checkout</span>
                    <span className="text-xl"><LiaChevronCircleRightSolid /></span>
                    <span className="text-xl hover:text-[#ff9b49] font-semibold"> Order Complete</span>
                </div>
                <div className="w-full h-5/6 bg-indigo-500 p-2">
                    aaaa
                </div>
            </div>
            <div className="flex flex-col gap-1 bg-purple-200 h-full w-3/12 p-2.5 rounded-lg">
                    <div className="flex items-center w-full h-1/2 justify-between">
                        <div className="text-lg font-semibold">Total:</div>
                        <div className="flex text-lg font-semibold"><span className="text-red-700">Total</span>$</div>
                    </div>
                    <div className="flex items-center gap-4 w-full h-1/2 justify-between ">
                        <Link href={'/'} className="text-signup-left outline outline-offset-2 outline-1 rounded-full p-1 w-3/5 text-center">
                            Continue Shopping
                        </Link>
                        <button  className="rounded-full py-1.5 w-2/5 bg-gradient-to-r from-signup-left to-signup-right text-white">Check Out</button>
                    </div>
                </div>
        </div>
     );
}
 
export default Cart;