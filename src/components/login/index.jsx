import { useForm } from '@mantine/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Container,
    Group,
    Button,
    Tabs,
} from '@mantine/core';

export function Login() {
    const router = useLocation();
    const navigate = useNavigate();
    const active = (router.pathname === '/login') ? 0 : 1

    const form = useForm({
        initialValues: {
            email: '',
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
    const signup = useForm({
        initialValues: {
            username: '',
            password: '',
            email: '',
            confirmpassword: ''
        },
        validationRules: {
            username: (val) => val.length >= 6,
            password: (val) => val.length >= 6,
            email: (val) => val.length >= 6,
            confirmPassword: (confirmpassword, values) => confirmpassword === values.password
        },
        errorMessages: {
            username: 'Should be more than 6 characters',
            password: 'Incorrect password',
            email: 'Incorrect email',
            confirmpassword: 'password missmatched'
        }
    })

    return (
        <Container sx={{ margin: 'auto' }} style={{minWidth: '350px'}}>
            <Tabs tabPadding="sm" grow active={active} onTabChange={(ind) => navigate((ind === 1) ? '/signup' : '/login')}>
                <Tabs.Tab label='Login'>
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
                </Tabs.Tab>
                <Tabs.Tab label='SignUp'>
                    <form onSubmit={signup.onSubmit(values => signup.validate && console.log(values))}>
                        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                            <TextInput label="Username" placeholder="username" {...signup.getInputProps('username')} required />
                            <TextInput label="Email" placeholder="email" {...signup.getInputProps('email')} required mt="md" />
                            <PasswordInput label="Password" placeholder="password" {...signup.getInputProps('password')} required mt="md" />
                            <PasswordInput label="Confirm Password" placeholder="password" {...signup.getInputProps('confirmPassword')} required mt="md" />
                            <Button type='submit' fullWidth mt="xl">
                                SignUp
                            </Button>
                        </Paper >
                    </form>
                </Tabs.Tab>
            </Tabs>
        </Container >
    );
}
