const Hero = () => {
  return (
    <section className="padding-container max-container-hero h-screen py-12 xl:py-32 bg-hero bg-cover bg-center">
      <div className="max-w-[600px] capitalize relative top-1/4 z-20 -rotate-6">
        <h1 className="h1 relative text-primary">
          <span className="text-stroke">Modern</span> restaurant in{" "}
          <span className="text-stroke">Center</span> of{" "}
          <span className="text-stroke">the</span> city!
        </h1>
        <div className="flex gap-3">
          <button
            className="btn_secondary rounded-md capitalize medium-16 transition-all duration-300 
                       hover:bg-transparent hover:border-primary !p-3 !px-8"
          >
            Order now
          </button>
          <button
            className="btn_secondary rounded-md capitalize transition-all duration-300 !bg-transparent
                       !border-primary medium-16 hover:!bg-secondary hover:!border-secondary !p-3 !px-8"
          >
            About us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
