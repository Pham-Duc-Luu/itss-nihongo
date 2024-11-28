// app/layout.tsx
export const metadata = {
    title: 'User Profile',
  };
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body
          style={{
            margin: 0,
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#EAFBF7',
          }}
        >
          {/* Header */}
          <header
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 20px',
              backgroundColor: '#ffffff',
              borderBottom: '1px solid #ddd',
            }}
          >
            <h1 style={{ fontSize: '20px', margin: 0 }}>Logo</h1>
            <img
              src="https://via.placeholder.com/40"
              alt="User avatar"
              style={{ width: '40px', height: '40px', borderRadius: '50%' }}
            />
          </header>
          {children}
        </body>
      </html>
    );
  }
  