export default function SignUpPage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0D0D0D',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <form style={{
        backgroundColor: '#023535',
        padding: '2rem',
        borderRadius: '12px',
        maxWidth: '400px',
        width: '100%',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        boxShadow: '0 0 20px rgba(0, 143, 140, 0.3)'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: '#0FC2C0' }}>Create an Account</h2>

        <input type="text" placeholder="Full Name" style={inputStyle} />
        <input type="email" placeholder="Email Address" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />

        <button type="submit" style={buttonStyle}>Sign Up</button>

        <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#CFEAE8' }}>
          Already have an account? <a href="/login" style={{ color: '#0CABA8' }}>Log in</a>
        </p>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: '0.75rem',
  borderRadius: '8px',
  border: '1px solid #008F8C',
  backgroundColor: '#121212',
  color: '#fff',
  fontSize: '0.9rem'
};

const buttonStyle = {
  backgroundColor: '#0FC2C0',
  color: '#023535',
  padding: '0.75rem',
  borderRadius: '8px',
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: '0.3s'
};
