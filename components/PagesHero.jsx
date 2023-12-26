import Link from "next/link"

const PagesHero = ({heading, homePage, nextPage, linkPage}) => {
  return (
    <section className="bg-hero bg-cover bg-center page">
        <div className="text-white relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-center">
                <h4 className="text-[52px] font-bold">{`${heading}`}</h4>
                <div className="regular-18">
                    <Link href={'/'} alt="homepage" className="hover:text-secondary">{`${homePage}`} </Link>
                     /
                    <Link href={`${linkPage}`} alt='nextPage' className="hover:text-secondary"> {`${nextPage}`}</Link>

                </div>
            </div>
        </div>
    </section>
  )
}

export default PagesHero