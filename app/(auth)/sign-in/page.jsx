"use client";

import { useRouter } from "next/navigation";
import Container from "@/components/layouts/container";
import Title from "@/components/layouts/app-title";
import { Button } from "@/components/ui/button";
import { TbBrandGoogle, TbBrandGithub } from "react-icons/tb";
import Footer from "@/components/layouts/footer";

const SignIn = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <Container className={"justify-center"}>
      <div className="mx-auto grid w-full max-w-xs grid-cols-1 place-items-center space-y-2">
        <Title />
        <Button
          onClick={handleClick}
          variant="outline"
          className="w-full max-w-xs md:max-w-sm"
        >
          <TbBrandGoogle className="mr-2" />
          Sign in with Google
        </Button>
        <Button
          onClick={handleClick}
          variant="default"
          className="w-full max-w-xs md:max-w-sm"
        >
          <TbBrandGithub className="mr-2" />
          Sign in with Github
        </Button>
      </div>
      <Footer />
    </Container>
  );
};

export default SignIn;
