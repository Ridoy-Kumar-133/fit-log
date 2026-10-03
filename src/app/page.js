
import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import Library from "./components/Library";
import HeroSection from "./shareComponents/HeroSection";


export default function Home() {
  return (
   <div>
    <HeroSection></HeroSection>
    <Library></Library>
   </div>
  );
}
