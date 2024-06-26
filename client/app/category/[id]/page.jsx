'use client'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import Navbar from '@/components/Navbar';
import { getAllProductByCategory } from '@/app/api/route';
import Pagination from '@/components/Pagination';

const Category = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const category = useSelector(state => state.category.categories);
    const products = useSelector((state) => state.product.allProductCategory);
    const idCategory = process.env.NEXT_PUBLIC_BURGER_CATEGORY_ID;
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;                                                      // Số sản phẩm trên mỗi trang
    const indexOfLastProduct = currentPage * productsPerPage;                       // chỉ mục cuối
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;               // chỉ mục đầu
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    useEffect(() => {
        if(id) {
            getAllProductByCategory(id, dispatch);
        }
    }, [id])


    return ( 
        <div className="margin-component mt-[31px] ">
            <div className="w-full h-1/4">
                <img src="/33ef8b9c0b902154a6cd4103a21275ef.jpg" className="w-full h-[150px] object-cover rounded-md px"/>
            </div>
            <div className="flex gap-5 h-3/4 w-full pt-16">
                <div className='flex flex-col gap-2.5 h-full w-3/12 py-6'>
                    <div className='w-full h-1/3'><Navbar id={id}/></div>
                    <div className='w-full h-1/3 bg-rose-200'>
                        <img src="/burger_advertising_poster_by_rightside24h_de3suec-fullview.jpg" alt="banner"/>
                    </div>
                    <div className='w-full h-1/3 bg-rose-200'>
                        <img src="/Hamburger-Advertisement-Poster-Template-Awesomeflyer-com-668x1024.webp" alt="banner"/>
                    </div>
                </div>
                <div className='flex flex-col h-full w-9/12 gap-3 py-6 '>
                    <div className='flex justify-end w-full h-1/6 '>
                        <select 
                            className='border-2 p-2 rounded-lg'
                            // onChange={handleChangeSort}
                        >
                            <option value="">Sort</option>
                            <option value="asc">Price: Low to High</option>
                            <option value="desc">Price: High to Low</option>
                        </select>
                    </div>
                    <div className='grid grid-cols-3 grid-rows-3 gap-6 w-full h-4/6 pb-6'>
                        {currentProducts.map(product => (
                            <Link href={`/productdetail/${product._id}`} className='flex flex-col gap-4 w-full h-full border p-5  hover:shadow-xl duration-300'>
                                <div className='w-full h-3/5'><img src={`${process.env.NEXT_PUBLIC_API_UPLOAD}/${product.name}/${product.images[0]}`} alt="photo product" className='w-full h-full object-contain'/></div>
                                <div className='flex flex-col w-full h-2/5'>
                                    <div className='w-full h-2/3 text-lg font-medium'>{product.name}</div>
                                    <div className='w-full h-1/3 text-[#ffc139] text-2xl font-semibold '><span className=''>$ {product.price}</span></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className='w-full h-1/6 '>
                        <Pagination 
                            totalProduct={products.length} 
                            productsPerPage={productsPerPage} 
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Category;