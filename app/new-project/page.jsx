"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import { FileCode } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { TiFolderAdd } from "react-icons/ti";

const NewProjectForm = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/roadmap");
  };
  return (
    <Container>
      <section>
        <h1 className="flex items-center text-2xl font-semibold">
          <FileCode className="mr-2" /> New Project
        </h1>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetuer</p>
      </section>
      <form action="" className="mt-6 h-full space-y-4">
        <div className="grid grid-cols-1 gap-2">
          <Label>Project Title</Label>
          <Input placeholder="Enter project title" />
        </div>
        <div className="grid grid-cols-1 gap-2">
          <Label>Description</Label>
          <Textarea
            placeholder="Enter project title"
            className="h-96 resize-none"
          />
        </div>
        <div className="relative mx-auto flex items-center justify-around text-muted-foreground">
          <Separator className="w-full" />
          <span className="absolute bg-white p-2">OR</span>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <Label>Upload Capstone Document | Under Development</Label>
          <Input type="file" disabled />
        </div>
      </form>
      <Button onClick={handleClick} className={"mt-auto"}>
        <TiFolderAdd className="mr-2 h-4 w-4" /> Create Project
      </Button>
    </Container>
  );
};

export default NewProjectForm;
