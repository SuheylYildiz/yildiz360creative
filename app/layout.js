export const metadata = {
  title: 'Yildiz360Creative',
  description: 'Empowering filmmakers with a sleek all-in-one creative workspace',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
