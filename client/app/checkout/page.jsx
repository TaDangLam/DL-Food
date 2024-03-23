'use client'
import axios from "axios";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { TbCircleNumber1, TbCircleNumber2 } from "react-icons/tb";
import { LiaChevronCircleRightSolid } from "react-icons/lia";
import { useSelector } from "react-redux";

// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Paypal from "@/components/Paypal";
// import { PayPalButton } from "react-paypal-button-v2";
// import Paypal2 from "@/components/Paypal2";

const CheckoutPage = () => {
    const router = useRouter();
    const { idUser } = useParams();

    const user = useSelector(state => state.auth.user);
    const cartsData = useSelector(state => state.cart.cart);
    const accessToken = useSelector(state => state.auth.accessToken);
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);
    const [province, setProvince] = useState('');
    const [phone, setPhone] = useState(user.phone);
    const [total, setTotal] = useState(0);
    const [statusPaid, setStatusPaid] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState('');
    const [tempAddress, setTempAddress] = useState('');
    const [selectedPaymentMethod ,setSelectedPaymentMethod] = useState('COD');

    const calcuTotal = () => {
        const calc = cartsData.reduce((total, cart) => total + cart.total, 0);
        setTotal(calc.toFixed(2));
    }

    useEffect(() => {
        calcuTotal();
    }, [cartsData])

    // useEffect(() => {
    //     setTempAddress(selectedAddress)
    // }, [selectedAddress])


    const handleDirectPayment = () => {
        console.log("Processing direct payment (COD)...");
    }

    console.log('selectedAddress', selectedAddress);
    // console.log('tempAddress', tempAddress);
    

    return( 
        <div className="margin-component mt-[31px] flex flex-col gap-5">
            <div className="flex items-center gap-5 justify-center w-full h-1/6 py-8">
                <span className="text-xl font-semibold cursor-pointer hover:text-[#ff9b49]" onClick={() => router.back()}> Shopping Cart</span>
                <span className="text-xl"><LiaChevronCircleRightSolid /></span>
                <span className="text-xl font-semibold text-[#ff9b49]"> Checkout</span>
                <span className="text-xl"><LiaChevronCircleRightSolid /></span>
                <span className="text-xl font-semibold"> Order Detail</span>
            </div>
            <form  className="flex gap-3 w-full h-10/12">
                <div className="flex flex-col gap-8 bg-white w-3/6 px-3 py-6 h-full rounded-xl">  
                    <div className="w-full text-2xl font-bold h-1/3 text-[#ff8349]">Payment Information</div>
                    <div className="flex flex-col gap-5 w-full h-2/3">
                        <div className="w-full">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="email"
                                type="text"
                                readOnly
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder=""
                            />
                        </div>

                        <div className="w-full ">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Email
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="email"
                                type="text"
                                readOnly
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder=""
                            />
                        </div>
                        
                        <div className="w-full ">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Phone
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="phone"
                                type="text"
                                readOnly
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                placeholder=""
                            />
                        </div>

                        <div className="w-full ">
                            <label className="flex items-center uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                (<span className="text-red-500 font-semibold">*</span>) Address 
                            </label>
                            <select 
                                name="" 
                                id=""
                                className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                onChange={e => setSelectedAddress(e.target.value)}
                                >
                                    <option value="" className="">Choose Address</option>
                                    {user.address.map(addr => (
                                        <option key={addr._id} value={addr._id}>{`${addr.street}, ${addr.city}, ${addr.province}`}</option>
                                    ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 bg-white w-3/6 rounded-xl px-4 py-6 h-full border-2 border-[#ff8349]">
                    <div className="w-full h-1/6 text-[#ff8349] text-2xl font-bold">Your Order</div>
                    <div className="flex flex-col gap-6 p-7 w-full h-3/6">
                        <div className="flex items-center justify-between border-b-2 border-[#ff8349] h-full w-full">
                            <div className="h-full w-7/12 text-xl font-semibold">Product</div>
                            <div className="h-full w-3/12 text-center text-xl font-semibold">Quantity</div>
                            <div className="h-full w-2/12 text-xl font-semibold">Price</div>
                        </div>
                        {cartsData.map(cartItem => (
                            <div className="flex items-center justify-between border-b-2 border-slate-100 h-full w-full" key={cartItem._id}>
                                <div className="h-full w-7/12">{cartItem.item.name}</div>
                                <div className="h-full w-3/12 text-center">{cartItem.quantity}</div>
                                <div className="h-full w-2/12 flex">{cartItem.total.toFixed(2)} </div>
                            </div>
                        ))}
                        <div className="flex items-center justify-between border-b-2 border-[#ff8349] h-full w-full">
                            <div className="h-full w-6/12 text-xl font-semibold">Total:</div>
                            <div className="h-full w-2/12 text-xl font-semibold flex"><span className="text-[#ff8349]">{total}</span> <BsCurrencyDollar/></div>
                        </div>
                    </div>
                    <div className="w-full h-1/6 px-7 Lamta">
                        <div className="flex items-center gap-2">
                            <input 
                                type="radio" 
                                id="cod" 
                                name="paymentMethod" 
                                value="COD" 
                                checked={selectedPaymentMethod === "COD"} 
                                onChange={() => setSelectedPaymentMethod("COD")} 
                            />
                            <label htmlFor="cod" className="font-semibold">Direct Payment (COD)</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input 
                                type="radio" 
                                id="Paypal" 
                                name="paymentMethod" 
                                value="PayPal" 
                                checked={selectedPaymentMethod === "Paypal"} 
                                onChange={() => setSelectedPaymentMethod("Paypal")} 
                            />
                            <label htmlFor="Paypal" className="font-semibold">Online Payment (Paypal)</label>
                        </div>
                    </div>
                    {selectedPaymentMethod === "COD" ? (
                        <button type="button" onClick={handleDirectPayment} className="w-full h-1/6 bg-rose-500 p-2 text-white rounded-lg hover:bg-rose-800">Order</button>
                    ) : (
                        <div>
                           <Paypal 
                                amount={total} 
                                payload={{
                                    orderBy: user._id,
                                    paymentType: selectedPaymentMethod,
                                    totalPrice: total,
                                    orderDetail: cartsData.map(cartItem => ({
                                        productId: cartItem.item._id, 
                                        quantity: cartItem.quantity,
                                        totalPriceProduct: cartItem.total 
                                    })),
                                    isPaid: !statusPaid,
                                    address: selectedAddress
                                }}
                                accessToken={accessToken}
                            />
                        </div>
                    )}
                </div>
            </form>
        </div>
    )
}

export default CheckoutPage;