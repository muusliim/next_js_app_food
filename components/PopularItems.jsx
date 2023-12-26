import { PopularData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { CiHeart, CiRead, CiShop, CiShoppingCart } from "react-icons/ci";

const PopularItems = () => {
  return (
    <section className="max-container padding-container py-12 xl:py-32">
      <div className="text-center mb-20">
        <h3 className="h3">
          Popular it<span className="text-secondary">ems</span>
        </h3>
        <p>
          Our restaurant`s website features a wide array of delectable dishes
          that are sure to tantalize your taste buds. From our signature steak,
          perfectly grilled to a juicy perfection, to our mouth-watering seafood
          platters, freshly caught and expertly prepared, we have something to
          satisfy every craving.
        </p>
      </div>

      <div className="flexCenter flex-wrap gap-12 lg:gap-14">
        {PopularData.map((item, i) => (
          <div key={i} className="flex flex-col">
            <div
              className="relative after:absolute after:-top-[10px] after:-bottom-[10px] 
              after:-left-[10px] after:-right-[10px] after:border
               after:border-black/30 after:rounded-md 
               hover:after:top-[10px] hover:after:bottom-[10px] hover:after:left-[10px] 
               hover:after:right-[10px] hover:after:bg-black/90
                hover:after:border-white after:transition-all after:duration-700 group"
            >
              <Image
                src={item.path}
                alt="PopularItems"
                height={350}
                width={255}
                className="rounded-md h-[350] w-[255]"
              />
              <div className="flexCenter gap-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 scale-0 transition-all duration-700 group-hover:!scale-100">
                <Link
                  href=""
                  className="border-[1px] border-tertiary p-3 invert"
                >
                  <CiRead />
                </Link>
                <Link href=""
                className="border-[1px] border-tertiary p-3 invert">
                    
                  <CiShoppingCart />
                </Link>
                <Link href=""
                className="border-[1px] border-tertiary p-3 invert">
                  <CiHeart />
                </Link>
              </div>
            </div>
    
                <Link href={''} className="medium-20 capitalize hover:text-secondary mt-6">{item.name}</Link>
                <p>{item.price}</p>
            </div>
        ))}
      </div>
    </section>
  );
};

export default PopularItems;
