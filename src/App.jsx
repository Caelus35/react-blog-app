import './App.css'
import BlogPost from './components/blog/BlogPost';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  return(
    <ThemeProvider>
      <div>
        <Header />
        <BlogPost />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
