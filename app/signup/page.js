"use client";

export default function SignUpLanding() {
  return (
    <div style={{
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#FFFFFF',
      fontFamily: "'Comfortaa', sans-serif",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '2.5rem',
        maxWidth: '360px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          backgroundColor: '#0FC2C0',
          borderRadius: '50%',
          margin: '0 auto 1.5rem'
        }} />

        <h2 style={{ color: '#000', marginBottom: '1.5rem' }}>
          Create Your Workspace
        </h2>

        <HoverButton text="Continue with Google" />
        <HoverButton text="Create with Email" />

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

function HoverButton({ text }) {
  return (
    <button
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#015958';
        e.target.style.color = '#fff';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#fff';
        e.target.style.color = '#000';
      }}
      style={{
        width: '100%',
        padding: '0.75rem',
        marginBottom: '0.75rem',
        border: '1px solid #ddd',
        borderRadius: '8px',
        fontSize: '0.9rem',
        fontFamily: "'Comfortaa', sans-serif",
        fontWeight: '500',
        backgroundColor: '#fff',
        color: '#000',
        cursor: 'pointer',
        transition: '0.3s',
        outline: 'none'
      }}
    >
      {text}
    </button>
  );
}

const linkStyle = {
  color: '#0CABA8',
  textDecoration: 'none',
  outline: 'none',
  boxShadow: 'none',
  WebkitTapHighlightColor: 'transparent'
};
