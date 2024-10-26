// const geistSans = localFont({
//   src: '../../public/fonts/GeistSans.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: '../../public/fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export default function Home() {
  return (
    <div
      className={`flex items-center justify-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <h1 className="text-4xl font-bold text-center">
        Welcome to Ffern Friends
      </h1>
    </div>
  );
}
