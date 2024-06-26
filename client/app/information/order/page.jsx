'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

import { getAllOrderUser } from "@/app/api/route";
import { useSelector } from "react-redux";

const Order = () => {
    const accessToken = sessionStorage.getItem('accessToken');
    const [orders, setOrders] = useState([]);
    
    const border1 = 'border border-slate-300';
    const border2 = border1 + ' font-semibold text-xl';

    const getOrderUser = async(accessToken) => {
        try {
            const data = await getAllOrderUser(accessToken);
            setOrders(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getOrderUser(accessToken);
    }, [])

    const renderIsPaid = (isPaid) => {
        return isPaid ? "Yes" : "No";
    };

    console.log(orders)

    return (
        <div className="flex flex-col gap-1">
            <div className="text-3xl text-red-500 font-semibold">Your Order</div>
            <div className="border-b-4 border-red-300 w-3/12"></div>
            {orders && orders.length > 0 ? (
                <div className="flex justify-center">
                    <table className={`table-auto border-collapse ${border1} w-11/12 mt-5`}>
                        <thead>
                            <tr className="bg-red-400 text-white text-center">
                                <td className={border2}>Index</td>
                                <td className={border2}>ID</td>
                                <td className={border2}>Method</td>
                                <td className={border2}>Status</td>
                                <td className={border2}>Is Paid</td>
                                <td className={border2}>Total</td>
                                <td className={border2}></td>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={order._id}>
                                    <td className={`${border1} pl-2 text-center`}>{index + 1}</td>
                                    <td className={`${border1} pl-2`}>{order._id}</td>
                                    <td className={`${border1} pl-2 text-center`}>{order.paymentType}</td>
                                    <td className={`${border1} pl-2 text-center`}>{order.status}</td>
                                    <td className={`${border1} pl-2 text-center`}>{renderIsPaid(order.isPaid)}</td>
                                    <td className={`${border1} pl-2 text-center`}>{order.totalPrice}</td>
                                    <td className={`${border1} p-2 flex justify-center`}>
                                        <Link href={`/information/order/orderdetail/${order._id}`} className="flex bg-slate-300 p-1.5 gap-1 rounded-lg text-slate-600 hover:bg-lime-700 hover:text-white w-4/5 justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                            </svg>
                                            Detail
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div>No Order . Please Order...</div>
            )}
        </div>
     );
}
 
export default Order;