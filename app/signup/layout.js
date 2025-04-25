export default function SignUpLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        backgroundColor: '#0D0D0D',
        fontFamily: "'Comfortaa', sans-serif",
        color: 'white'
      }}>
        {children}
      </body>
    </html>
  );
}
