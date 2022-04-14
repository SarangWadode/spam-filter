import { Card, Text, Group } from '@mantine/core';

export default function Product() {

    return (
        <Card shadow="sm" p="lg">
            <Group>
                <Text fontSize="lg" fontWeight="bold" mb="sm">User Name</Text>
                <Text size="sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum euismod, nisl sit amet consectetur consectetur,
                    nisi erat euismod nunc, eget consectetur nunc nisi eget
                    consectetur nunc.
                </Text>
            </Group>
        </Card>
    );
}
