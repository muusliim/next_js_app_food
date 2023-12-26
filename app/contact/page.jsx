import ContactForm from "@/components/ContactForm"
import PagesHero from "@/components/PagesHero"

const Contact = () => {
  return (
    <main>
      <PagesHero heading={'Contact'} homePage={'Home'} nextPage={'About'} linkPage={'/about'}/>
      <ContactForm/>
    </main>
  )
}

export default Contact