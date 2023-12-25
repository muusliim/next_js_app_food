import { FOOTER_LINKS, SOCIALS_DATA } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flexCenter pt-28 bg-footer bg-cover bg-center mt-10 shadow-none">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <div className="mb-6">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt="footerLogo"
              height={122}
              width={122}
            />
          </Link>
          <p className="max-w-xs text-primary pt-8">
          <div className="border-[0.5px] bg-gray-30"></div>
          </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1">
          {FOOTER_LINKS.map((elem, i) => (
            <div key={i}>
              <ul className="text-white flex flex-col gap-4 regular-14">
                <div className="flex flex-col gap-5">
                  <h4 className="bold-18">{elem.title}</h4>
                </div>
                {elem.links.map((link) => (
                  <Link href={'/'} key={link} className="hover:text-secondary">{link}</Link>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-4">
            <h4 className="text-primary bold-18">Socials</h4>
            <ul className="flex gap-4 regular-14">
              {SOCIALS_DATA.links.map((elem, i) => (
                <Link key={i} href={'/'}>
                  <Image src={elem} alt='socialIcon' height={22} width={22} className="invert"/>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-[0.5px] bg-gray-30"></div>
        <p className="text-center regular-14 text-white pb-4">2023 GoodFood | All right reserver.</p>
      </div>
    </footer>
  );
};

export default Footer;
