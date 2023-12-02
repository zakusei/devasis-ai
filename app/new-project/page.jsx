"use client";
import { useRouter } from "next/navigation";
import Container from "@/components/layouts/container";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaAlignLeft } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";
import { TiFolderAdd } from "react-icons/ti";
import Title from "@/components/layouts/app-title";
import Footer from "@/components/layouts/footer";

const NewProjectForm = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/roadmap");
  };

  return (
    <Container className="md:justify-start">
      <Title className="my-4 text-2xl md:text-3xl" />
      <section className="mx-auto w-full lg:w-1/2">
        <div className="relative mt-6 h-full space-y-4 md:h-fit lg:rounded-xl lg:bg-background/90">
          <div className="grid grid-cols-1">
            <span className="flex h-12 w-full items-center rounded-md rounded-b-none border border-b-0 bg-primary p-4 text-primary-foreground">
              <Label className="flex items-center gap-2">
                <FaAlignLeft />
                Project Description
              </Label>
            </span>
            <Textarea
              placeholder={`Briefly describe your project and all its features. \n\nEx. Web-based Automated Scholarship Management System`}
              className="h-96 resize-none rounded-t-none focus:outline-none"
            />
          </div>
          <div className="relative mx-auto flex items-center justify-around text-muted-foreground">
            <Separator className="w-full" />
            <span className="absolute bg-background p-2">OR</span>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <Label>Upload Capstone Document</Label>
            <Input type="file" />
          </div>
          <div className="relative p-0">
            <Button onClick={handleClick} className={"mt-auto w-full p-4"}>
              <TiFolderAdd className="mr-2 h-4 w-4" /> Generate Project
            </Button>
          </div>
        </div>
      </section>
      <Footer className="hidden pb-6 md:flex" />
    </Container>
  );
};

export default NewProjectForm;
