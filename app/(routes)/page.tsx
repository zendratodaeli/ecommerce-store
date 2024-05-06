import getBillboard from '@/actions/get-billboard';
import getProduct from '@/actions/get-products';
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProduct({isFeatured: true})
  const billboards = await getBillboard("c175af8c-6007-46a5-a403-e37261d03a8c")

  return (
    <div>
      <Container>
        <div className=' space-y-10 pb-10'>
          <Billboard data={billboards} />
          <div className=' flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
            <ProductList title="Featured Products" items={products} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HomePage
