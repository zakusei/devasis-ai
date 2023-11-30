"use client";

import FlexContainer from "@/components/layouts/Container";
import Title from "@/components/layouts/Title";
import { Button } from "@/components/ui/button";
import { TbBrandGoogle, TbBrandGithub } from "react-icons/tb";
import Footer from "@/components/layouts/Footer";

const SignIn = () => {
  return (
    <FlexContainer>
      <Title />
      <div className="grid w-full max-w-xs grid-cols-1 place-items-center space-y-2">
        <Button variant="outline" className="w-full max-w-xs md:max-w-sm">
          <TbBrandGoogle className="mr-2" />
          Sign in with Google
        </Button>
        <Button variant="default" className="w-full max-w-xs md:max-w-sm">
          <TbBrandGithub className="mr-2" />
          Sign in with Github
        </Button>
      </div>
      <Footer />
    </FlexContainer>
  );
};

export default SignIn;
