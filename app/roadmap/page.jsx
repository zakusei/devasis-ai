import Container from "@/components/layouts/container";
import Navbar from "@/components/layouts/floating-navigation";
import { TopNav } from "@/components/layouts/top-navigation";
import { RoadmapFlow } from "@/components/react-flow/roadmap-flow";

const Roadmap = () => {
  return (
    <div>
      <TopNav />
      <RoadmapFlow />
    </div>
  );
};

export default Roadmap;
