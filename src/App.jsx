import Gallery from './components/Gallery'
import SearchForm from './components/SearchForm'
import ThemeToggle from './components/ThemeToggle'

const App = () => {
  console.log('Unsplash images')
  return (
    <>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </>
  )
}

export default App
