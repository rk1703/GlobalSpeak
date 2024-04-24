import { SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server"
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const { userId } = auth();
    const url = "https://globalspeak.rkworld.me/translate";
    return (
        <header className="flex justify-between items-center px-6 mb-4 border-b-2 py-0.5 h-16">
            <div>
                <Link href="/" className="flex items-center justify-center space-x-3">
                    <Image
                        src="/logo2.png"
                        alt="logo"
                        width={48}
                        height={48}
                        className="object-contain cursor-pointer"
                    />
                    <p className="text-2xl font-medium lg:tracking-wide">Global Speak</p>

                </Link>

            </div>
            <div>
                {userId ? (
                    <div>
                        <UserButton />
                    </div>

                ) : (
                    <SignInButton afterSignInUrl={url} mode="modal" />
                )}
            </div>
        </header>
    )
}
