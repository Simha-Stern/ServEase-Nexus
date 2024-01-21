// Example of a simple React home page component

import React from 'react';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My React Home Page</h1>
        <p>This is a simple example of a React home page.</p>
      </header>

      <main>
        <section>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            tristique, libero vel fermentum eleifend.
          </p>
        </section>

        <section>
          <h2>Featured Products</h2>
          {/* Include your product components or list here */}
        </section>
      </main>

      <footer>
        <p>&copy; 2024 My React Home Page. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
