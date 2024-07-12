import Ratings from "@/components/Ratings/Ratings";
import Container from "@/components/shared/Container";
import { FaAngleRight } from "react-icons/fa6";

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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleProduct;
