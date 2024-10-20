import Link from "next/link";
import { Button } from "@repo/ui";
import { ModeToggle } from "./ModeToggle";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import UserAccountDropDown from "./UserAccountDropDown";
import Image from "next/image";
import { motion } from "framer-motion";

export const Appbar = () => {
  const session = useSession();
  const user = session.data?.user;

  return (
    <nav className="wrapper sticky top-0 z-50 mx-auto flex w-full items-center gap-2 py-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", type: "spring", damping: 10 }}
        className="bg-secondary/15 border-primary/10 mx-auto flex w-full justify-between rounded-2xl border p-6 shadow-lg shadow-neutral-600/5 backdrop-blur-lg"
      >
        <Link href={"/"} className="flex cursor-pointer items-center gap-2">
          <Image
            src={"https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
            alt="Logo"
            width={300}
            height={200}
            className="size-10 rounded-full"
          />
          <span className="text-foreground hidden text-lg font-bold tracking-tight md:block md:text-2xl">
            100xProjects
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <ModeToggle />
          {!user ? (
            <Button
              size={"lg"}
              onClick={async () => {
                await signIn();
              }}
            >
              Login
            </Button>
          ) : (
            ""
          )}
          <Link href={"/whiteboard"}>
            <Button className="h-10 rounded-md px-5">Whiteboard</Button>
          </Link>
          <UserAccountDropDown />
        </div>
      </motion.div>
    </nav>
  );
};
