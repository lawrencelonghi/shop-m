'use client'
import {Tabs, Tab} from "@heroui/tabs";
import {Card, CardBody} from "@heroui/card";
import { Accessories } from "./accessories";
import { Shoes } from "./shoes";
import { Clothing } from "./clothing";

export const TabSwitch = () => {
   const variant = "bordered";
return (
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
  );
}