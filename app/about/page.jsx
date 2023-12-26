import Features from "@/components/Features";
import PagesHero from "@/components/PagesHero";

const About = () => {
  return (
    <main>
      <PagesHero nextPage={'Shop'} heading={'About'} homePage={'Home'} linkPage={'/shop'}/>
      <Features/>
    </main>
  )
}

export default About;