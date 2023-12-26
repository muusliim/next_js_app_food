import Categories from "@/components/Categories"
import PagesHero from "@/components/PagesHero"
import PopularItems from "@/components/PopularItems"

const Shop = () => {
  return (
    <main>
      <PagesHero heading={'Shop'} homePage={'Home'} nextPage={'About'} linkPage={'/about'}/>
      <Categories/>
      <PopularItems/>
    </main>
  )
}

export default Shop