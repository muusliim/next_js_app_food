import Image from "next/image";
import { RiPlayFill } from "react-icons/ri";

function Features() {
  return (
    <section className="max-container padding-container flex gap-16 flex-col lg:flex-row py-12 xl:py-32">
      {/* left section */}
      <div className="flex-1 flexCenter">
        <div className="relative">
          <Image
            src={"/features.jpg"}
            alt="video"
            height={350}
            width={515}
            className="rounded-lg"
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16
             bg-secondary text-white bold-32 flexCenter rounded-full cursor-pointer"
          >
            <RiPlayFill />
            <div className="absolute h-12 w-12 bg-secondary rounded-full animate-ping !-z-10"></div>
          </div>
        </div>
      </div>
      {/* right section */}
      <div className="flex-1 flexCenter">
        <div className="flex flex-col gap-4">
          <p className="text-secondary regular-14">LIVE FOOD MAKING PROCESS</p>
          <h4 className="bold-24 leading-7 ">
            Explore a dynamic existence that promises to redefine your journey
          </h4>
          <p>
            A customer is the most important visitor on our premises, he is not
            dependent on us. We are dependent on him. He is not an interruption
            in our work. He is the purpose of it. He is not an outsider in our
            business. He is part of it. We are not doing him a favor by serving
            him. He is doing us a favor by giving us an opportunity to do so.
          </p>
          <Image
            src={"/signature.png"}
            alt="signature"
            height={66}
            width={66}
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
