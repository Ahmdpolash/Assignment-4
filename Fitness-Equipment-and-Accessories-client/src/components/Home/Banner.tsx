const Banner = () => {
  return (
    <div
      className="h-ful h-[calc(100vh_-_80px)] -z- w-full relative"
      style={{
        backgroundImage: "url(https://i.ibb.co/whb9Vdm/Hero.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-full relative  bg-gradient-to-l from-[#111] opacity-35"></div>

      <div className="z-20 text-white absolute max-w-2xl  top-[20%] left-[10%] right-[50% space-y-3">
        <h1 className="text-3xl leading-9 tracking-wide font-semibold ">
          Transform Your <br /> Fitness Into Shape{" "}
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          voluptatibus officia eos repellat vero quos ab debitis perspiciatis
          dolor pariatur! Itaque fuga eveniet dolorum exercitationem eum quae
          neque eaque quo ea quam ipsam eos delectus quia iusto recusandae, aut
          cumque distinctio culpa corrupti rerum nihil dolorem tempore minima
          repudiandae! Quos!
        </p>
      </div>
    </div>
  );
};

export default Banner;
