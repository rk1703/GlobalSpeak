import { SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server"
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const { userId } = auth();
    return (
        <header className="flex justify-between items-center px-6 mb-4 border-b-2">
            <div>
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={150}
                        height={100}
                        className="object-contain cursor-pointer"
                    />
                </Link>
            </div>
            <div>
                {userId ? (
                    <div>
                        <UserButton />
                    </div>

                ) : (
                    <SignInButton afterSignInUrl="/translate" mode="modal" />
                )}
            </div>
        </header>
    )
}
