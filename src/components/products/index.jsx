import { Container } from '@mantine/core';
import Product from './product';
import api from '../services/api';
import { useEffect, useState } from 'react';

export function Products() {
  const [products, setProducts] = useState({});
  const [config, setConfig] = useState({ start: 0, count: 10 })

  useEffect(() => {
    let result_query = ''
    Object.entries(result_query)
      .forEach(([key, value]) => {
        result_query += `${key}=${value}&`
      })
    let url = '/products?' + result_query.trimEnd('&')
    api.get(url).then(res => {
      setProducts(res.data);
    });
  },[config])
  console.log(products)
  return (
    <Container>
      {products?.results?.map(product => (
        <Product key={product.pk} name={product.name} image={`${products.base_url}${product.image}`} pk={product.pk} />
      ))}
    </Container>
  )
}