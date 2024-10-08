"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

function MobileNav({ user }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="border-none bg-white ">
          <Link
            href={"/"}
            className="flex cursor-pointer items-center gap-2 px-4 pb-5"
          >
            <Image src={"/icons/logo.svg"} width={34} height={34} alt="logo" />

            <h1 className="text-2xl font-ibm-plex-serif font-bold text-black-1">
              YPay
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);
                  return (
                    <Link
                      href={item.route}
                      key={item.label}
                      className={cn("mobilenav-sheet_close w-full", {
                        "bg-bank-gradient": isActive,
                      })}
                    >
                        <Image
                          src={item.imgURL}
                          width={20}
                          height={20}
                          alt={item.label}
                          className={cn({ "brightness-[3] inset-0": isActive })}
                        />
                      <span
                        className={cn("text-16 font-semibold text-black-2", {
                          "text-white": isActive,
                        })}
                      >
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
                {/* nav */}
              </nav>
            </SheetClose>
            <Footer user={user} type='mobile'/>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}

export default MobileNav;
