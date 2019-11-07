import React from 'react';
import ThemeContextProvider from './context/ThemeContext'
import AuthContextProvider from './context/AuthContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeToggle from './components/ThemeToggle';
import BookContextProvider from './context/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
