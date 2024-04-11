import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { userId } = auth();
  return (
    <main className="flex flex-col items-center justify-center mt-16 lg:mt-0 p-10 pt-5 lg:h-[calc(100vh-5rem)]">
      <h1 className="text-3xl lg:text-5xl text-center pb-8 mb-2 font-light">
        Understand your world and communicate across languages
      </h1>{" "}
      <Image
        src="/banner.webp"
        alt="logo"
        width={650}
        height={650}
      />
      {userId ? (
        <Link
          href="/translate"
          className="bg-blue-500 hover:bg-blue-600 w-full mt-10 lg:w-fit p-5 rounded-md text-white text-center cursor-pointer"
        >
          Translate Now
        </Link>
      ) : (
        <Button className="bg-blue-500 hover:bg-blue-600 w-full mt-10 lg:w-fit p-5">
          <SignInButton afterSignInUrl="/translate" mode="modal">
            Sign In to Get Translating
          </SignInButton>
        </Button>
      )}
    </main>
  );
}
