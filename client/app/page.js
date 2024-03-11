import Link from "next/link";
import { IoStar } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="margin-component mt-[31px] h-full">
      <div className=" w-full h-1/6 relative">
          <img src="/468702ee8eea3bb4d92aaa06d9b1e923.jpg" alt="Background images" className=" w-full object-cover rounded-xl"/>
          <div className="">
            <div className="absolute top-1/4 left-40 text-9xl text-[#ffc139] font-semibold">Food</div>
            <div className="absolute top-[350px] left-1/4 text-6xl text-white  font-medium">D E L I V E R Y</div>
            <Link href="/" className="text-white hover:text-[#ffc139] font-medium"><div className="absolute top-2/4 left-1/4 bg-[#ffc139] hover:bg-white p-4 px-14 rounded-3xl">ORDER NOW</div></Link>
          </div>
      </div>

      <div className="flex h-1/6 w-full pt-16">
        <div className=" w-1/2">
          <img src="Untitled-1.webp"/>
        </div>
        <div className="flex flex-col gap-9 w-1/2">
          <div className="text-5xl font-medium">BEST SALE ALWAYS</div>
          <div className="flex items-center gap-3">
            <div className="text-[#ffc139]"><IoStar /></div>
            <div className="text-[#ffc139]"><IoStar /></div>
            <div className="text-[#ffc139]"><IoStar /></div>
            <div className="text-[#ffc139]"><IoStar /></div>
          </div>
          <div>The perfect place to enjoy the life & delicious food with your
                friends! Our family has been in the restaurant business for a very
                long time. Nowadays we can proudly boast our reputation for a
                well known restaurant in our area. We are famous for the fabulous
                authentic cuisine, professional chef and dedicated staff….
          </div>
        </div>
      </div>

      <div className="flex gap-10 h-1/6 w-full pt-10">
        <div className="flex flex-col gap-8 p-5 h-full w-1/3">
          <div className="text-5xl font-medium w-full">
            BEEF CLASSIC <span className="text-[#ffc139]">BURGERS</span> 
          </div>
          <div className="w-full">
            Try this delicious burger containing of two fried parts of a whole-grain bun, a juicy piece of beef, cheese and lettuce
          </div>
          <div className="w-full">
            <Link href={'/'} className="flex bg-[#ffc139] p-5 w-1/6 text-white rounded-full hover:text-[#ffc139] hover:bg-white  hover:outline hover:outline-[#ffc139]"><FaPlus className="text-xl"/></Link>
          </div>
          <div className="w-full">
            <img src="/Untitled-2.webp"/>
          </div>
        </div>

        <div className="flex flex-col gap-8 p-5 h-full w-1/3 ">
            <div className="w-full">
              <img src="/Untitled-3.webp"/>
            </div>
            <div className="text-5xl font-medium w-full">
              THE BEST <span className="text-[#ffc139]">PASTA</span> 
            </div>
            <div className="w-full">
              Our pasta with seafood is mixed perfectly with a glass of white wine
            </div>
            <div className="w-full">
              <Link href={'/'} className="flex bg-[#ffc139] p-5 w-1/6 text-white rounded-full hover:text-[#ffc139] hover:bg-white  hover:outline hover:outline-[#ffc139]"><FaPlus className="text-xl"/></Link>
            </div>
        </div>

        <div className="flex flex-col gap-8 p-5 h-full w-1/3 ">
          <div className="text-5xl font-medium w-full">
            SEASON <span className="text-[#ffc139]">SOUP</span> 
          </div>
          <div className="w-full">
            We offer you a special dish – our season soup containing season vegetables
          </div>
          <div className="w-full">
            <Link href={'/'} className="flex bg-[#ffc139] p-5 w-1/6 text-white rounded-full hover:text-[#ffc139] hover:bg-white  hover:outline hover:outline-[#ffc139]"><FaPlus className="text-xl"/></Link>
          </div>
          <div className="w-full">
            <img src="/Untitled-4.webp"/>
          </div>
        </div>

      </div>

      <div className="h-1/6">d</div>
      <div className="h-1/6">d</div>
      <div className="h-1/6">d</div>
    </div>
  );
}
