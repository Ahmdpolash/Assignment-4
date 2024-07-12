import { FaArrowCircleRight, FaArrowRight, FaEye } from "react-icons/fa";
import Container from "../shared/Container";
import { TbCurrencyDollar } from "react-icons/tb";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Ratings from "../Ratings/Ratings";
import { useGetProductsQuery } from "@/redux/api/api";

const BestSelling = () => {
  const { data: apiResponse } = useGetProductsQuery([]);
  const products = apiResponse?.data || [];

  return (
    <div className="lg:px-5">
      <Container>
        <div className="flex justify-between items center">
          <div className="flex flex-col gap-y-1 my-4">
            <h1 className="text-2xl font-semibold uppercase text-white my-">
              Best Selling Products
            </h1>

            <div className="h-[1px] w-[170px] bg-teal-300"></div>
          </div>

          <Link
            to={"/products"}
            className="text-[16px] cursor-pointer hover:text-teal-300 font-medium flex items-center gap-2 text-white underline "
          >
            See All Products <FaArrowRight />
          </Link>
        </div>

        <section className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {products.slice(0, 10).map((product: any, idx: number) => (
            <div
              key={idx}
              className="card lg:h-[350px]   cursor-pointer group shadow-lg rounded-md border border-teal-300/3 border-slate-50/10 p-2 lg:px-3  lg:py-3"
            >
              <div className="relative overflow-hidden">
                <img
                  className="mx-auto md:h-[170px] lg:h-[210px] md:w-full w-full  rounded-md transition-opacity hover:duration-700 ease-in-out"
                  src={product.image}
                  alt="Product image"
                />

                {/* overlay */}
                <ul className="flex gap-3 h-[75px] lg:h-[120px] bg-slate-100 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-700 -bottom-10 justify-center items-center  absolute w-full group-hover:bottom-0">
                  <li className="w-[38px] shadow-md border h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[360deg] transition-all">
                    <AiFillHeart className="text-[20px]" />
                  </li>
                  <Link
                    to={`/products/${product._id}`}
                    className="w-[38px] shadow-md border h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-red-500 hover:text-white hover:rotate-[360deg] transition-all"
                  >
                    <FaEye className="text-[18px]" />
                  </Link>
                  <li className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center shadow-md border rounded-full hover:bg-violet-500 hover:text-white hover:rotate-[360deg] transition-all">
                    <AiOutlineShoppingCart className="text-[20px]" />
                  </li>
                </ul>

                {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-700"></div> */}
              </div>

              <div className="">
                <Link to={`/products/${product._id}`}>
                  {" "}
                  <h3 className="font-medium text-slate-300 my-1 mt-1 hover:text-teal-500 duration-500">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex justify-between items-center">
                  <div className="pb-1 flex items-center justify-between">
                    <div className="flex items-center text-white">
                      <TbCurrencyDollar className="text-[20px]" />
                      <p className="font-semibold   pb-2 transition-all duration-500 lg:mt-2">
                        {product.price}
                      </p>
                    </div>

                    <button className="block lg:hidden text-red-500 absolute bottom-5 right-4">
                      {" "}
                      <FaArrowCircleRight className="text-[21px]" />{" "}
                    </button>
                  </div>
                  <div className="flex items-center text-white">
                    <Ratings ratings={5} /> (5)
                  </div>
                </div>

                <div className="bg-[#e7e7e8] lg:flex hidden mx-auto justify-center text-center gap-2  border border-slate-300 py-[5px]  hover:border hover:duration-500 hover:border-teal-500 rounded-full px-2 lg:px-4 text-[13px] font-semibold">
                  Add To Cart
                </div>
              </div>
            </div>
          ))}
        </section>
      </Container>
    </div>
  );
};

export default BestSelling;
