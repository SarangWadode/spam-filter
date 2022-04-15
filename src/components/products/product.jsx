import { Card, Image, Text, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function Product({ image, name, pk }) {

  return (
    <Card shadow="sm" p="lg" style={{margin: '20px 0'}}>
      <Group grow>
        <Image src={image} height={160} alt='' />
        <Group>
          <Text fontSize="lg" fontWeight="bold" mb="sm">{name}</Text>
        </Group>
        <Group direction='column' align='center'>
          <Button variant="light" color="blue" style={{ marginTop: 14, width: '100px' }}>
            Buy
          </Button>
          <Button component={Link} to={`/products/${pk}`} variant="light" color="blue" style={{ marginTop: 14, width: '100px' }}>
            Reviews
          </Button>
        </Group>
      </Group>
    </Card>
  );
}