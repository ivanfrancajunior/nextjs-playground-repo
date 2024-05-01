import React from "react";
type Props = {
  params: {
    slug: string[];
  };
  searchParams: {
    sortedOrder: string;
  };
};
const ProductPage = ({
  params: { slug },
  searchParams: { sortedOrder },
}: Props) => {
  return (
    <div>
      <h3>Do u thing 21</h3>
      <h4>
        {slug} {sortedOrder}
      </h4>
    </div>
  );
};

export default ProductPage;
