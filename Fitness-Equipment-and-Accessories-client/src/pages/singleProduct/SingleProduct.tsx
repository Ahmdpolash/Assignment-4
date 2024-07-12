import Ratings from "@/components/Ratings/Ratings";
import Container from "@/components/shared/Container";
import { FaHeart } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

const SingleProduct = () => {
  return (
    <div>
      <Container>
        <div className="flex items-center mt-10 text-white/80 italic text-[18px]">
          products <FaAngleRight />
          <span className="text-white font-medium">blackwidow-elite</span>
        </div>

        <div className="flex mt-10 md:flex-row flex-col justify-center lg:p-5 lg:border border-b pb-4 lg:rounded-lg gap-10">
          <div className="w-full flex-1">
            <img
              src="https://i.pinimg.com/564x/c4/0d/26/c40d2660c72c8f22a2bfd0913a35c5af.jpg"
              alt="blackwidow-elite"
              className="rounded-lg max-w-md md:max-w-full w-full object-cover md:h-96 max-h-96"
            />
          </div>

          <div className="space-y-5 flex-1 text-white">
            <h1 className="text-3xl font-medium">BlackWidow Elite</h1>
            <h3 className="text-2xl font-medium">$170</h3>
            <hr />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              quisquam, laborum, doloribus delectus accusantium pariatur dolores
              natus dolor deserunt quidem, corrupti doloremque vero qui
              molestiae?
            </p>
            <div className="flex gap-1">
              <Ratings ratings={4} />
            </div>
            <h3>Category : Dumble</h3>
            <h6 className="bg-zinc-200 text-sm text-black inline-block px-2 py-1 rounded-lg">
              Availablity: 25 in stock
            </h6>

            <div className="mx-autotext-start pt-16">
              <a
                className="px-6 py-4 bg-gradient-to-r from-[#94f3b0]  to-[#7abf88] text-black rounded-full font-semibold cursor-pointer"
                href="/trainer/656590ef4d7f8f119f1fadf8"
              >
                Add to Cart
              </a>
            </div>

            <div className="py-3 l:py-4 flex gap-3 items-center">
              <div className="flex cursor-pointer bg-[#E0E8EF] w-32 rounded-md">
                <p className="w-full py-1 lg:py-2 text-2xl text-center border">
                  {" "}
                  -
                </p>
                <p className="border w-full text-center text-xl font-semibold py-1 lg:py-2">
                  5
                </p>
                <p className="text-center py-1 lg:py-2 text-xl w-full border">
                  +
                </p>
              </div>

              <button className="bg-violet-500 flex cursor-pointer  gap-1 items-center py-2 lg:py-3 text-white px-6 rounded-sm">
                Add to Cart <IoCartOutline className="text-[22px]" />
              </button>

              <div className="py-3 lg:py-4  px-3 lg:px-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-cyan-500/40 bg-cyan-500 text-white">
                <FaHeart />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleProduct;
