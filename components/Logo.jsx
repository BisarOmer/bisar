import { Box, useColorMode, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Logo = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  return (
    <Box className="logo" onClick={() => router.push("/")}>
      {colorMode === "light" ? <Image w={"150px"} h={"80px"} src="black.png" /> : <Image w={"150px"} h={"80px"} src="white.png" />}
    </Box>
  );
};

export default Logo;
