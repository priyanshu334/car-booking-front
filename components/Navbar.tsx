"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Left */}
        <Link href="/" className="text-xl font-bold">
          🚗 CarBook
        </Link>

        {/* Center */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/cars" className="hover:text-primary">
            Cars
          </Link>
          <Link href="/bookings" className="hover:text-primary">
            My Bookings
          </Link>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Not logged in (later condition) */}
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>

          {/* Logged in user menu (keep for later auth state) */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarFallback>MG</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
