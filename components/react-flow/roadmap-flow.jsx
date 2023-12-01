"use client";
import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

export const RoadmapFlow = () => {
  return (
    <div className="h-screen w-screen">
      <ReactFlow>
        <Background />
      </ReactFlow>
    </div>
  );
};
