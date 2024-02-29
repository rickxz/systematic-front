import { Button, useToast } from '@chakra-ui/react'

interface IToast {
    title: string;
    description: string;
    status: "info" | "warning" | "success" | "error" | "loading" | undefined;
    isClosable: boolean;
}

export default function SystemToast({title, description, status, isClosable}: IToast) {
    const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: title,
            description: description,
            status: status,
            duration: 9000,
            isClosable: isClosable,
          })
        }
      >
        Show Toast
      </Button>
    )
  }