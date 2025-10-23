import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { title, subtitle } from "@/components/primitives";
import { ColorScale } from "@heroui/theme";
import { color } from "framer-motion";
import { TabSwitch } from "@/components/tabSwitch";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center ">
        <h1 className={title() }>Welcome, we are </h1>
        <h1 className={title({ size: "lg", color:'blue' })}>
          ShopM
        </h1>
        <br />

        <h2 className={subtitle({ class: "my-4" })}>
          Sell what you believe.
        </h2>
        <p className={subtitle({ class: "my-4", size: 'sm'}) }>
          ShopM is a versatile and adaptable online store model, designed to serve a wide variety of product niches. The platform offers a practical and elegant solution for showcasing and selling goods. Its customizable design and intuitive interface empower businesses to create a unique and seamless digital storefront for their customers.
        </p>
      </div>
      <TabSwitch/>
    </section>
  )
}
