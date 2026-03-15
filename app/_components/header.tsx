import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image
          alt="FSW Barber"
          src="/logo.png"
          height={18}
          width={120}
          className="h-auto w-auto"
        />
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex items-center gap-3 border-b border-solid p-5">
              <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/49378520?v=4"></AvatarImage>
              </Avatar>
              <div className="flex flex-col">
                <p className="font-bold">Pedro Junior</p>
                <p className="text-xs">pedro.junior@prctech.com</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 border-b border-solid p-5">
              <SheetClose asChild>
                <Button
                  asChild
                  className="m-0 justify-start gap-2 p-0"
                  variant="ghost"
                >
                  <Link href="/">
                    <HomeIcon size={18} /> Inicio
                  </Link>
                </Button>
              </SheetClose>
              <Button className="m-0 justify-start gap-2 p-0" variant="ghost">
                <CalendarIcon size={18} /> Agendamentos
              </Button>
            </div>
            <div className="flex flex-col gap-1 border-b border-solid p-5">
              {quickSearchOptions.map((option) => (
                <Button
                  key={option.title}
                  className="m-0 justify-start gap-2 p-0"
                  variant="ghost"
                >
                  <Image
                    src={option.imageUrl}
                    width={18}
                    height={18}
                    alt={option.title}
                  />
                  {option.title}
                </Button>
              ))}
            </div>
            <div className="flex flex-col gap-1 p-5">
              <Button className="m-0 justify-start gap-2 p-0" variant="ghost">
                <LogOutIcon size={18} />
                Sair da Conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
