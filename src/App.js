import Footer from 'components/Footer'
import Header from 'components/Header'
import { ThemeProvider } from 'contexts/ThemeContext'
import Home from 'pages/Home'

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col flex-1 bg-gray-300 dark:bg-gray-500">
        <Header />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
