import Container from "@/components/layouts/Container";
import Navbar from "@/components/layouts/Navbar";
import { RoadmapFlow } from "@/components/react-flow/roadmap-flow";

const Roadmap = () => {
  return (
    <div>
      <RoadmapFlow />
      <Navbar />
    </div>
  );
};

export default Roadmap;
