import React from 'react';
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
import { useForm } from '@mantine/hooks';

export function Login() {
    const form = useForm({
        initialValues: {
            username: '',
            password: ''
        },
        validationRules: {
            username: '',
            password: ''
        },
        error: {
            username: 'Should be more than 6 characters',
            password: 'Incorrect password'
        }
    }) 
    return (
        <Container size={420} my={40}>
            <Title
                align="center"
                sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
            >
                Admin Login
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                Do not have an account yet?{' '}
                {/* <Anchor<'a'> href="#" size="sm" onClick={(event) => event.preventDefault()}>
          Create account
        </Anchor> */}
            </Text>

            <form onSubmit={form.onSubmit(values => console.log(values))}>
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput label="Username" placeholder="username" {...form.getInputProps('username')} required />
                    <PasswordInput label="Password" placeholder="password" {...form.getInputProps('password')} required mt="md" />
                    <Group position="apart" mt="md">
                        <Checkbox label="Remember me" />
                        {/* <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
            Forgot password?
          </Anchor> */}
                    </Group>
                    <Button type='submit' fullWidth mt="xl">
                        Login
                    </Button>
                </Paper >
            </form>
        </Container >
    );
}