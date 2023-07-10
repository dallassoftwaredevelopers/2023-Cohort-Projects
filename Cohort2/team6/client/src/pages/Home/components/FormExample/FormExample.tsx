import {
  Button, Input, Stack, FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/react"
import { useForm, SubmitHandler } from 'react-hook-form';

type FavoriteColorForm = {
  favoriteColor: string,
  yourName: string;
}

export const FormExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FavoriteColorForm>();
  const onSubmit: SubmitHandler<FavoriteColorForm> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <FormControl isInvalid={!!errors.favoriteColor}>
          <FormLabel>Whats your favorite color?</FormLabel>
          <Input {...register("favoriteColor", { required: 'Favorite color is required' })} />
          <FormErrorMessage>{errors.favoriteColor?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.yourName}>
          <FormLabel>What is your name?</FormLabel>
          <Input {...register("yourName", { required: 'Your name is required' })} />
          <FormErrorMessage>{errors.yourName?.message}</FormErrorMessage>
        </FormControl>

        <Button type="submit">
          Submit Form
        </Button>
      </Stack>
    </form>
  )
}


