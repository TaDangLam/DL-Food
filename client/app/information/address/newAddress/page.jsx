'use client'
import { useRouter } from 'next/navigation'
import { useState } from "react";

import { addAddress } from '@/app/api/route';
import { useDispatch, useSelector } from 'react-redux';

const newAddress = () => {
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const accessToken = useSelector(state => state.auth.accessToken);
    const userId = user._id;


    const handleAddNewAddress = async(e) => {
        e.preventDefault();
        try {
            const data = { street, city, province };
            await addAddress(data, userId, accessToken, dispatch);
        } catch (error) {
            console.log(error)
        }
        router.push('/information/address');
    }

    return ( 
        <div className="flex flex-col gap-5 px-2 w-full h-full">
            <div className=" w-full h-1/6 px-3 text-xl font-semibold">New Address</div>
            <div className=" py-2 w-full h-5/6">
                <form onSubmit={handleAddNewAddress}>
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Street
                        </label>
                        <input
                        className={`appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 bg-gray-300`}
                        id="grid-password"
                        type="text"
                        placeholder="Please Enter Street"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        />

                    </div>

                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            City
                        </label>
                        <input
                        className={`appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 bg-gray-300`}
                        id="grid-password"
                        type="text"
                        placeholder="Please Enter City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        />

                    </div>

                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Province
                        </label>
                        <input
                        className={`appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 bg-gray-300`}
                        id="grid-password"
                        type="text"
                        placeholder="Please Enter Province"
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                        />

                    </div>
                    <button type="submit" className="bg-gradient-to-r from-signup-left to-signup-right hover:shadow-xl text-white font-bold py-2 px-4 mx-3 w-36 rounded mt-2">
                        Add
                    </button>
                </form>
            </div>
        </div>
     );
}
 
export default newAddress;