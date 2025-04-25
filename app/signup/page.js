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
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '2rem',
        maxWidth: '360px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 5px 20px rgba(0,0,0,0.2)'
      }}>
        {/* Logo Placeholder */}
        <div style={{
          marginBottom: '1.5rem'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#0FC2C0',
            borderRadius: '50%',
            margin: '0 auto'
          }} />
        </div>

        <h2 style={{ color: '#333', marginBottom: '1.5rem' }}>Create your workspace</h2>

        <button style={primaryButton}>Continue with Google</button>
        <button style={secondaryButton}>Continue with email</button>
        <button style={secondaryButton}>Create with email</button>

        <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '1.5rem' }}>
          By signing up, you agree to our <a href="#" style={{ color: '#0FC2C0' }}>Terms of Service</a> and <a href="#" style={{ color: '#0FC2C0' }}>Data Processing Agreement</a>.
        </p>

        <p style={{ fontSize: '0.85rem', marginTop: '1rem', color: '#444' }}>
          Already have an account? <a href="/login" style={{ color: '#0CABA8' }}>Log in</a>
        </p>
      </div>
    </div>
  );
}

const primaryButton = {
  width: '100%',
  padding: '0.75rem',
  marginBottom: '0.75rem',
  backgroundColor: '#6C63FF',
  color: '#fff',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '0.9rem'
};

const secondaryButton = {
  width: '100%',
  padding: '0.75rem',
  marginBottom: '0.75rem',
  backgroundColor: '#fff',
  color: '#333',
  border: '1px solid #ddd',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '0.9rem'
};
