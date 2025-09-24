import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import CardSection from './Components/CardSection/CardSection'
import AccordionSection from './Components/AccordionSection/AccordionSection'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>

        <section id='card_section' >
          <CardSection data={{ title: 'titulo 1', content: "Contenido1" }} />
          {/* <CardSection data={{}} /> */}

        </section>
        <section id='accordion_section' >
          <AccordionSection />

        </section>

      </main>
      <Footer />
    </>
  )
}

export default App
