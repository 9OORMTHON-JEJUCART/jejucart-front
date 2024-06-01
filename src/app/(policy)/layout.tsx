export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="font-pretendard">
      <body>
        <main className="m-auto h-full w-full max-w-[390px] flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}