import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import Web from "./Web";
import Design from "@/components/design";

const TabS = ()  => {
  return (
    <div className="flex w-full flex-col justify-center items-center">
      <Tabs aria-label="Options">
        <Tab key="photos" title="Web Development">
          <Card>
            <CardBody>
<Web/>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="music" title="UI/UX Design">
          <Card>
            <CardBody>
             <Design/>
            </CardBody>
          </Card>  
          </Tab>
      </Tabs>
    </div>  
  );
}


export default TabS