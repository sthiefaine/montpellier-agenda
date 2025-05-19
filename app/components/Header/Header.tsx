import Link from "next/link";
import { CurrentDate } from "@/app/components/CurrentDate/CurrentDate";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[40px] bg-white shadow-sm z-50">
      <div className="container mx-auto h-full px-4">
        <nav className="flex items-center justify-between h-full">
          <Link href="/" className="text-lg font-bold text-gray-900">
            Agenda Montpellier
          </Link>
          <div className="flex items-center gap-4">
            <CurrentDate />
          </div>
        </nav>
      </div>
    </header>
  );
}
