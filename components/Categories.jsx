import { categoryData } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function Categories({ bg }) {
  return (
    <section className={`${bg} max-container padding-container py-10 xl:py-30`}>
      <div className="text-center mb-20">
        <h3 className="h3">
          Categor<span className="text-secondary">ies</span>
        </h3>
        <p>
          At our establishment, we offer a diverse range of cuisine to satisfy
          every craving. Our menu is divided into several categories, including
          savory appetizers, fresh salads, hearty entrees, and indulgent
          desserts. Whether you're in the mood for a light bite or a full-course
          meal, we have something to suit your taste buds. Come and join us for
          an unforgettable dining experience!
        </p>
        <div className="flexCenter flex-wrap gap-12 lg:gap-14 mt-3">
          {categoryData.map((item, i) => (
            <div key={i} className="flexCenter flex-col gap-8">
              <div className="relative after:absolute after:-top-[10px] after:-bottom-[10px] 
              after:-left-[10px] after:-right-[10px] after:border
               after:border-secondary after:rounded-full 
               hover:after:top-[10px] hover:after:bottom-[10px] hover:after:left-[10px] 
               hover:after:right-[10px] hover:after:bg-black/30
                hover:after:border-white after:transition-all after:duration-700 ">
                <Image
                  src={item.path}
                  alt="category"
                  height={244}
                  width={244}
                  className="rounded-full h-36 w-36"
                />
              </div>
              <Link
                href={"/"}
                className="medium-20 capitalize hover:text-secondary"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
