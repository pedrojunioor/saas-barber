import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import Image from "next/image"

const SiderbarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto px-2">
      <SheetHeader className="">
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>
      <div className="flex items-center gap-3 border-b border-solid pb-5 pl-2">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/49378520?v=4"></AvatarImage>
        </Avatar>
        <div className="flex flex-col">
          <p className="font-bold">Pedro Junior</p>
          <p className="text-xs">pedro.junior@prctech.com</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 border-b border-solid pb-5">
        <SheetClose asChild>
          <Button asChild className="m-0 justify-start gap-2" variant="ghost">
            <Link href="/">
              <HomeIcon size={18} /> Inicio
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} /> Agendamentos
        </Button>
      </div>
      <div className="flex flex-col gap-1 border-b border-solid pb-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
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
      <div className="flex flex-col gap-1 pb-5">
        <Button className="justify-start gap-2" variant="ghost">
          <LogOutIcon size={18} />
          Sair da Conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SiderbarSheet
