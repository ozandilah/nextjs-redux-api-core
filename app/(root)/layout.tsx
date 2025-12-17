'use client';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="flex flex-col min-h-screen">
        <main className="flex-1 w-full bg-white dark:bg-black">
              {children}
        </main>
    </div>
  );
}


