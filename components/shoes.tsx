'use client'
import {RadioGroup, Radio} from "@heroui/radio";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import { Button } from "@heroui/button";
import Image from "next/image";

export const Shoes = () => {
  return <div className="flex gap-6">
      <Card isFooterBlurred>
        <div className="relative">
          <Image
            alt="Card example background"
            className="object-cover object-center"
            src="/images/shoes/black-sneaker.jpg"
            width={500}
            height={800}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 z-10">

        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <h4 className="text-black font-medium text-2xl">Black Sneaker</h4>
        </CardHeader>

        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <RadioGroup color="secondary" orientation="horizontal" classNames={{ wrapper: "gap-6"}}>
              <Radio value="small">Small</Radio>
              <Radio value="medium">Medium</Radio>
              <Radio value="large">Large</Radio>
            </RadioGroup>
          </div>
  
          <Button className="text-tiny" color="success" radius="full" size="sm">
            Add to cart
          </Button>
        </CardFooter>
        </div>
      </Card>

      <Card isFooterBlurred>
        <div className="relative">
          <Image
            alt="Card example background"
            className="object-cover object-center"
            src="/images/shoes/black-sneaker.jpg"
            width={500}
            height={800}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 z-10">

        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <h4 className="text-black font-medium text-2xl">Black Sneaker</h4>
        </CardHeader>

        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <RadioGroup color="secondary" orientation="horizontal" classNames={{ wrapper: "gap-6"}}>
              <Radio value="small">Small</Radio>
              <Radio value="medium">Medium</Radio>
              <Radio value="large">Large</Radio>
            </RadioGroup>
          </div>
  
          <Button className="text-tiny" color="success" radius="full" size="sm">
            Add to cart
          </Button>
        </CardFooter>
        </div>
      </Card>
  </div>
}