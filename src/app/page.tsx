import { MembershipConfiguration } from "@/components/membership-configuration";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center py-8">
      <MembershipConfiguration />
    </div>
  );
}
