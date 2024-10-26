import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center p-9 bg-sand75 rounded shadow-custom-light min-h-[480px]">
      <h1 className="text-base lg:text-2xl">
        Ooops! Sorry we cant find your page
      </h1>
      <p className="text-sm lg:text-xl">
        You just hit a route that doesn&#39;t exist...the sadness.
      </p>
      <Link href="/" className="underline">
        Take me home
      </Link>
    </div>
  );
}
