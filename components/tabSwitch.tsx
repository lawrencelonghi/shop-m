'use client'
import {Tabs, Tab} from "@heroui/tabs";
import { Button } from "@heroui/button";
import {Card, CardBody} from "@heroui/card";
import { Accessories } from "./accessories";
import { Shoes } from "./shoes";
import { Clothing } from "./clothing";

export const TabSwitch = () => {
   const variant = "bordered";
return (
  <div>
    <div className="flex w-full flex-col items-center">
      <Tabs key={variant} aria-label="Options" variant={variant}>
        <Tab key="shoes" title="Shoes">
          <Card>
            <CardBody>
              <Shoes/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="clothing" title="Clothing">
          <Card>
            <CardBody>
              <Clothing/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="accessories" title="Accessories">
          <Card>
            <CardBody>
              <Accessories/>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>

          <div className="fixed bottom-4 right-12 z-50">
        <Button
          className="text-tiny text-white bg-green-500"
          radius="lg"
          size="sm"
          // onPress={openModal}
        >
          Checkout (0 items)
        </Button>
      </div>
  </div>
)
}