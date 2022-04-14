import { Card, Image, Text, Button, Group } from '@mantine/core';

export default function Product() {

  return (
    <div style={{ margin: 'auto' }}>
      <Card shadow="sm" p="lg">
        <Group grow>
          <Image src="" height={160} alt='' />
          <Group>
            <Text fontSize="lg" fontWeight="bold" mb="sm">Product Name</Text>
            <Text size="sm" style={{ lineHeight: 1.5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum euismod, nisl sit amet consectetur consectetur,
              nisi erat euismod nunc, eget consectetur nunc nisi eget
              consectetur nunc.
            </Text>
          </Group>
          <Group direction='column' align='center'>
            <Button variant="light" color="blue" style={{ marginTop: 14, width: '100px' }}>
              Buy
            </Button>
            {/* Review page link here */}
            <Button variant="light" color="blue" style={{ marginTop: 14, width: '100px' }}>
              Reviews
            </Button>
          </Group>
        </Group>
      </Card>
    </div>
  );
}