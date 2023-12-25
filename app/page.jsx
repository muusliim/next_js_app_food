import Categories from "@/components/Categories";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero/> 
      <Features/>
      <Categories bg={'bg-[#fafafa]'}/>
      <Testimonials/>
    </main>
  )
}
