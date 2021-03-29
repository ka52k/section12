import { memo, VFC } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
  // return <p>ユーザー管理ページです</p>;
  return (
    // <Wrap>
    // {/* <Wrap spacing="30px"> */}
    //   {[...Array(10)].map(() => (
    //     <WrapItem>
    //     <div style = {{ width: '100px', height: '100px', backgroundColor: "teal" }} />
    //     </WrapItem>
    //   ))}
    // </Wrap>
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        {/* <Box
          w="260px"
          h="260px"
          bg="white"
          borderRadius="10px"
          shadow="md"
          p={4}
          _hover={{ cursor: "pointer", opacity: 0.8 }}
        >
          <Stack textAlign="center">
            <Image
              borderRadius="full"
              boxSize="160px"
              src="https://source.unsplash.com/random"
              alt="プロフィール画像"
              m="auto"
            />
            <Text fontSize="lg" fontWeight="bold">
              圭一
            </Text>
            <Text fontSize="sm" color="gray">
              keiichi kobayshi
            </Text>
          </Stack>
        </Box> */}
        <UserCard
          imageUrl="https://source.unsplash.com/random"
          userName="圭一"
          fullName="keiichi kobayashi"
        />
      </WrapItem>
    </Wrap>
  );
});
