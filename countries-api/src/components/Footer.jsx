import React from 'react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer className="footer">
      <button onClick={scrollToTop}>Back To Top</button>
      <p>&copy; CountriesApi</p>
    </footer>
  );
};
