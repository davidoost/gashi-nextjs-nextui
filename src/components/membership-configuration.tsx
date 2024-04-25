"use client";

import { Card, CardBody } from "@nextui-org/card";
import { Switch } from "@nextui-org/switch";
import { Divider } from "@nextui-org/divider";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { useState } from "react";

export const MembershipConfiguration = () => {
  const [subscriptionOption1, setSubscriptionOption1] = useState(false);
  const [additionalOptions1, setAdditionalOptions1] = useState([""]);
  const [subscriptionOption2, setSubscriptionOption2] = useState(false);

  const calculatePrice = () => {
    let basePrice = 0;
    if (subscriptionOption1) {
      basePrice += 15;
      if (additionalOptions1.includes("locatie")) {
        basePrice -= 2.5;
      }
      if (additionalOptions1.includes("boodschappen")) {
        basePrice -= 2.5;
      }
    }
    if (subscriptionOption2) {
      basePrice += 5;
    }
    return basePrice;
  };

  const price = calculatePrice();
  return (
    <div className="w-full max-w-lg flex flex-col p-4 gap-4">
      <h1 className="text-5xl font-bold text-default-foreground">Settings</h1>
      <Card
        shadow="none"
        className="bg-content2 p-4 border-medium border-primary"
      >
        <CardBody className="flex-col gap-2 items-center">
          <p>
            <span className="text-4xl font-semibold">€{price}</span>
            <span className="text-tiny font-medium text-default-400">
              /per maand
            </span>
          </p>
        </CardBody>
      </Card>
      <Card shadow="none" className="bg-content2">
        <CardBody className="flex-col gap-2">
          <div className="flex items-start">
            <div className="grow flex flex-col gap-1">
              <p className="text-xl font-semibold">Zaterdag</p>
              <p className="text-sm font-light text-foreground-500">
                Ik wil er bij zijn op zaterdag zonder iedere keer afzonderlijk
                te hoeven betalen.
              </p>
            </div>
            <Switch
              isSelected={subscriptionOption1}
              onValueChange={setSubscriptionOption1}
            />
          </div>
          {subscriptionOption1 && (
            <>
              <Divider />
              <CheckboxGroup
                size="md"
                value={additionalOptions1}
                onValueChange={setAdditionalOptions1}
                defaultValue={["boodschappen", "locatie"]}
              >
                <Checkbox value="boodschappen">
                  <p className="text-sm">
                    Ik wil meedraaien in het schema om boodschappen te doen.
                  </p>
                </Checkbox>
                <Checkbox value="locatie">
                  <p className="text-sm">
                    Ik wil meedraaien in het schema om een locatie te regelen.
                  </p>
                </Checkbox>
              </CheckboxGroup>
            </>
          )}
        </CardBody>
      </Card>
      <Card shadow="none" className="bg-content2">
        <CardBody className="flex-col gap-2">
          <div className="flex items-start">
            <div className="grow flex flex-col gap-1">
              <p className="text-xl font-semibold">Overig</p>
              <p className="text-sm font-light text-foreground-500">
                Ik wil graag mee als er andere uitjes gepland worden wanneer er
                te veel geld in de pot zit, zonder extra te hoeven betalen.
              </p>
            </div>
            <Switch
              isSelected={subscriptionOption2}
              onValueChange={setSubscriptionOption2}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
