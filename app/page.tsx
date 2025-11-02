export default function HomePage() {
  const text = 'sdsdsdsdsdsdsdsssssd';
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(1000px 500px at 50% 50%, rgba(99,102,241,0.25), transparent)',
    }}>
      <div style={{
        textAlign: 'center',
        padding: '2rem 3rem',
        borderRadius: '1rem',
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(17, 24, 39, 0.6)',
        color: 'white',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', margin: 0 }}> {text} </h1>
        <p style={{ opacity: 0.8, marginTop: '0.75rem' }}>Next.js on Vercel</p>
      </div>
    </main>
  );
}
