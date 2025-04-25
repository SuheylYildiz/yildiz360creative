export default function SignUpLanding() {
  return (
    <div style={{
      minHeight: '100vh',
      overflow: 'hidden',
      backgroundColor: '#FFFFFF',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '2.5rem',
        maxWidth: '360px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 5px 25px rgba(0,0,0,0.1)'
      }}>
        {/* الشعار */}
        <div style={{
          width: '40px',
          height: '40px',
          backgroundColor: '#0FC2C0',
          borderRadius: '50%',
          margin: '0 auto 1.5rem'
        }} />

        <h2 style={{ color: '#000', marginBottom: '1.5rem' }}>Create your workspace</h2>

        {/* الأزرار */}
        <button style={{ ...buttonStyle, backgroundColor: '#fff', color: '#000' }} onMouseOver={(e) => hoverEffect(e)} onMouseOut={(e) => resetEffect(e)}>Continue with Google</button>
        <button style={{ ...buttonStyle, backgroundColor: '#fff', color: '#000' }} onMouseOver={(e) => hoverEffect(e)} onMouseOut={(e) => resetEffect(e)}>Continue with email</button>
        <button style={{ ...buttonStyle, backgroundColor: '#fff', color: '#000' }} onMouseOver={(e) => hoverEffect(e)} onMouseOut={(e) => resetEffect(e)}>Create with email</button>

        {/* النص القانوني */}
        <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '1.5rem' }}>
          By signing up, you agree to our{" "}
          <a href="#" style={linkStyle}>Terms of Service</a> and{" "}
          <a href="#" style={linkStyle}>Data Processing Agreement</a>.
        </p>

        <p style={{ fontSize: '0.85rem', marginTop: '1rem', color: '#444' }}>
          Already have an account? <a href="/login" style={{ ...linkStyle, fontWeight: 'bold' }}>Log in</a>
        </p>
      </div>
    </div>
  );
}

// الزر العادي
const buttonStyle = {
  width: '100%',
  padding: '0.75rem',
  marginBottom: '0.75rem',
  border: '1px solid #ddd',
  borderRadius: '8px',
  fontSize: '0.9rem',
  fontWeight: '500',
  cursor: 'pointer',
  transition: '0.3s',
  outline: 'none'
};

// الرابط بدون تأثير التركيز
const linkStyle = {
  color: '#0CABA8',
  textDecoration: 'none',
  outline: 'none'
};

// عند الهوفر
function hoverEffect(e) {
  e.target.style.backgroundColor = '#015958';
  e.target.style.color = '#fff';
}

// عند الإزالة
function resetEffect(e) {
  e.target.style.backgroundColor = '#fff';
  e.target.style.color = '#000';
}
