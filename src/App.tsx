import Nav from './components/Nav'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main className='snow'>
        <Header />
        <Content />
      </main>
      <Footer />
    </>
  )
}

export default App
