'use client'
import {RadioGroup, Radio} from "@heroui/radio";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import { Button } from "@heroui/button";
import Image from "next/image";
import sneakerData from "@/data/sneakers.json" 

interface SneakerProduct {
    id: number;
    title: string;
    description: string;
    price: string;
    img: string
}

export const Shoes = () => {

const sneakers: SneakerProduct[] = sneakerData as SneakerProduct[]

  return (
    <div className="flex gap-6">
      {sneakers.map((sneaker) => (
          <Card key={sneaker.id} isFooterBlurred>
            <div className="relative">
              <Image
                alt="Card example background"
                src= {sneaker.img}
                width={500}
                height={800}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 z-10">

            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <h4 className="text-amber-50 font-medium text-2xl">{sneaker.title}</h4>
            </CardHeader>

            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                {/* <RadioGroup color="secondary" orientation="horizontal" classNames={{ wrapper: "gap-6"}}>
                  <Radio value="small">Small</Radio>
                  <Radio value="medium">Medium</Radio>
                  <Radio value="large">Large</Radio>
                </RadioGroup> */}
                <p className="text-sm">{sneaker.description}</p>
              </div>
             <div className="flex gap-2">
                <Button className="text-tiny cursor-default" color="default" radius="full" size="sm">
                  {sneaker.price}
                </Button>

                <Button className="text-tiny" color="success" radius="full" size="sm">
                  Add to cart
                </Button>
              </div>

            </CardFooter>
            </div>
          </Card>
        ))}
    </div>
    )
}