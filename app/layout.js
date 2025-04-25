export const metadata = {
  title: 'Yildiz360Creative',
  description: 'Empowering filmmakers with a sleek all-in-one creative workspace',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&display=swap" rel="stylesheet" />
        <style>{`
          body {
            margin: 0;
            font-family: 'Comfortaa', sans-serif;
            background-color: #0D0D0D;
            color: white;
          }

          header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            background-color: #0D0D0D;
            border-bottom: 1px solid #222;
          }

          .logo {
            font-weight: bold;
            font-size: 1.1rem;
            color: white;
          }

          nav {
            display: flex;
            align-items: center;
            gap: 1.2rem;
          }

          nav a {
            font-size: 0.9rem;
            font-weight: 500;
            color: #CFEAE8;
            text-decoration: none;
            padding: 0.4rem 0.75rem;
            border-radius: 6px;
            transition: background-color 0.2s ease, color 0.2s ease;
          }

          nav a:hover {
            background-color: #015958;
            color: #fff;
          }

          nav a.signup {
            background-color: white;
            color: #0D0D0D;
            padding: 0.4rem 0.9rem;
            font-size: 0.9rem;
            font-weight: 600;
            border-radius: 6px;
            transition: background-color 0.2s ease, color 0.2s ease;
          }

          nav a.signup:hover {
            background-color: #015958;
            color: #fff;
          }

          .hero {
            padding: 6rem 2rem;
            max-width: 1000px;
            margin: auto;
            text-align: center;
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
          <div className="logo">Yildiz360Creative</div>
          <nav>
            <a href="#">Product</a>
            <a href="#">Resources</a>
            <a href="#">Pricing</a>
            <a href="#">Customers</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">Log in</a>
            <a href="#" className="signup">Sign up</a>
          </nav>
        </header>
        <section className="hero">
          <h1>Yildiz360Creative</h1>
          <p>Your Creative Workflow, All in One Place</p>
        </section>
        {children}
      </body>
    </html>
  );
}
