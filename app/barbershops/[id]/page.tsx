import Image from "next/image"
import { db } from "../../_lib/prisma"
import { notFound } from "next/navigation"
import { Button } from "@/app/_components/ui/button"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Link from "next/link"
import ServiceItem from "@/app/_components/service-item"
import PhoneItem from "@/app/_components/phone-item"
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet"
import SiderbarSheet from "@/app/_components/sidebar-sheet"

type PageProps = {
  params: Promise<{ id: string }>
}

const BarbershoPage = async ({ params }: PageProps) => {
  const { id } = await params
  const barbershop = await db.barbershop.findUnique({
    where: {
      id,
    },
    include: {
      services: true,
    },
  })

  if (!barbershop) return notFound()

  return (
    <div>
      <div className="relative h-62.5 w-full">
        <Image
          alt={barbershop?.name}
          fill
          src={barbershop?.imageUrl}
          className="object-cover"
        />
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-4 left-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="secondary"
              className="absolute top-4 right-4"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SiderbarSheet />
        </Sheet>
      </div>
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>
        <div className="mb-2 flex items-center">
          <MapPinIcon size={18} className="text-primary" />
          <p className="text-sm">{barbershop.address}</p>
        </div>
        <div className="flex items-center">
          <StarIcon size={18} className="text-primary fill-primary" />
          <p className="text-sm">5.0 (500 Avaliações)</p>
        </div>
      </div>
      <div className="space-y-3 border-b border-solid p-5">
        <h1 className="text-xs font-bold text-gray-400 uppercase">Sobre nós</h1>
        <p className="text-justify text-sm">{barbershop.description}</p>
      </div>
      <div className="space-y-3 p-5">
        <h2 className="text-xs font-bold text-gray-400 uppercase">Serviços</h2>
        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>
      <div className="space-y-3 p-5">
        {barbershop.phones.map((phone, i) => (
          <PhoneItem key={phone + i} phone={phone} />
        ))}
      </div>
    </div>
  )
}

export default BarbershoPage
