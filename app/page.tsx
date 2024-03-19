import { FourthSection, Landing, SecondSection, ThirdSection, FifthSection, ContactSection } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
      <div className="space-y-8">
      <Landing/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <ContactSection/>
      </div>
  );
}
