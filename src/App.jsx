import { Route, Routes} from 'react-router';
import './App.css'
import IndividualBlogPost from './components/blog/IndividualBlogPost';
import { ThemeProvider } from './components/ThemeContext';
import ContactPage from './components/contact/ContactPage';
import CommonLayout from './layouts/CommonLayout';
import PostList from './components/postList/PostList';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import { AuthProvider } from './components/authWrapper/AuthProvider';


function App() {
  return(
    <ThemeProvider>
      <AuthProvider>
        <Routes>
          <Route element={<CommonLayout />}>
          <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/posts" element={<PostList />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/posts/:post_id" element={<IndividualBlogPost />} />
          </Route>
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
