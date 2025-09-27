import Hero from "./Hero"
import Services from "./Services"
import Industries from "./Industries"
import Partners from "./Partners"

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <div className="relative z-20">
          <Services />
          <Industries />
          <Partners />
        </div>
      </main>
    </>
  )
}
