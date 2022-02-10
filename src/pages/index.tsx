import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { MainPage } from '../components/PageMain'

interface ProductData {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number, count: number };
  title: string;
}

const Home: NextPage = () => {
  const [product, setProduct] = useState<ProductData[]>();
  const [category, setCategory] = useState<string[]>();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProduct(json));

    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategory(json))
  }, []);

  return (
    <div className="mainContainer">
      <Header />

      <MainPage />
    </div>
  )
}

export default Home
