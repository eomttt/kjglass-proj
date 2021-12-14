import React from 'react';

const Shop = () => {
  return <div>Old shop page</div>;
};

export function getServerSideProps(ctx) {
  let destination = '/shop';

  if (ctx.query.shopId === '10001') {
    destination = '/shop?id=1';
  }

  if (ctx.query.shopId === '10002') {
    destination = '/shop?id=2';
  }

  return {
    redirect: {
      destination,
      permanent: false,
    },
  };
}
export default Shop;
