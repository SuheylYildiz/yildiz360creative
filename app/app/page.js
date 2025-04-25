'use client';

export const metadata = {
  title: 'Yildiz360Creative',
  description: 'Empowering filmmakers with a sleek all-in-one creative workspace',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #023535;
            color: white;
          }
          header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 2rem;
            background-color: #015958;
          }
          nav a {
            color: #0FC2C0;
            margin-left: 1.5rem;
            text-decoration: none;
            font-weight: 500;
          }
          .hero {
            padding: 6rem 2rem;
            max-width: 1000px;
            margin: auto;
            text-align: left;
          }
          .hero h1 {
            font-size: 3rem;
            line-height: 1.2;
            margin-bottom: 1.5rem;
            color: #ffffff;
          }
          .hero p {
            font-size: 1.25rem;
            line-height: 1.6;
            color: #CFEAE8;
            margin-bottom: 2rem;
          }
          .hero button {
            background-color: #0FC2C0;
            color: #023535;
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
        `}</style>
      </head>
      <body>
        <header>
          <div style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Yildiz360Creative</div>
          <nav>
            <a href="#">Product</a>
            <a href="#">Resources</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
            <a href="#">Login</a>
            <a href="#" style={{ backgroundColor: '#0FC2C0', color: '#023535', padding: '0.5rem 1rem', borderRadius: '5px' }}>Sign Up</a>
          </nav>
        </header>
        <section className="hero">
          <h1>Yildiz360Creative Is A Purpose-Built Platform For Creative Teams</h1>
          <p>Meet the modern system for streamlined film production management and coordination. Collaborate seamlessly in one powerful workspace.</p>
          <button>Start Building</button>
        </section>
        {children}
      </body>
    </html>
  );
}
