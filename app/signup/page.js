export default function SignUpLanding() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0D0D0D',
      padding: '2rem'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '2.5rem',
        maxWidth: '360px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 5px 25px rgba(0,0,0,0.25)'
      }}>
        {/* دائرة الشعار */}
        <div style={{
          width: '40px',
          height: '40px',
          backgroundColor: '#0FC2C0',
          borderRadius: '50%',
          margin: '0 auto 1.5rem'
        }} />

        <h2 style={{ color: '#0D0D0D', marginBottom: '1.5rem' }}>Create your workspace</h2>

        <button style={primaryButton}>Continue with Google</button>
        <button style={secondaryButton}>Continue with email</button>
        <button style={secondaryButton}>Create with email</button>

        <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '1.5rem' }}>
          By signing up, you agree to our <a href="#" style={linkStyle}>Terms of Service</a> and <a href="#" style={linkStyle}>Data Processing Agreement</a>.
        </p>

        <p style={{ fontSize: '0.85rem', marginTop: '1rem', color: '#444' }}>
          Already have an account? <a href="/login" style={{ ...linkStyle, fontWeight: 'bold' }}>Log in</a>
        </p>
      </div>
    </div>
  );
}

const primaryButton = {
  width: '100%',
  padding: '0.75rem',
  marginBottom: '0.75rem',
  backgroundColor: '#0FC2C0',
  color: '#023535',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '0.9rem',
  transition: 'background 0.3s'
};

const secondaryButton = {
  width: '100%',
  padding: '0.75rem',
  marginBottom: '0.75rem',
  backgroundColor: '#fff',
  color: '#0D0D0D',
  border: '1px solid #ddd',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '0.9rem'
};

const linkStyle = {
  color: '#0CABA8',
  textDecoration: 'none',
  outline: 'none'
};
