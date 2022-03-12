import { useForm } from '@mantine/hooks';
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from '@mantine/core';

export function Login() {
    const form = useForm({
        initialValues: {
            username: '',
            password: ''
        },
        validationRules: {
            username: (val) => val.length >= 6,
            password: (val) => val.length >= 6
        },
        errorMessages: {
            username: 'Should be more than 6 characters',
            password: 'Incorrect password'
        }
    })
    return (
        <Container sx={{margin: 'auto'}} >
            <Title
                align="center"
                sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
            >
                Admin Login
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                Do not have an account yet?{' '}
                {/* TODO: add route */}
                <Anchor href="#" size="sm" onClick={(event) => event.preventDefault()}>
                    Create account
                </Anchor>
            </Text>

            <form onSubmit={form.onSubmit(values => form.validate && console.log(values))}>
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput label="Username" placeholder="username" {...form.getInputProps('username')} required />
                    <PasswordInput label="Password" placeholder="password" {...form.getInputProps('password')} required mt="md" />
                    <Group position="apart" mt="md">
                        <Checkbox label="Remember me" />
                        {/* TODO: add route */}
                        <Anchor onClick={(event) => event.preventDefault()} href="#" size="sm">
                            Forgot password?
                        </Anchor>
                    </Group>
                    <Button type='submit' fullWidth mt="xl">
                        Login
                    </Button>
                </Paper >
            </form>
        </Container >
    );
}
