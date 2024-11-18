import gql from 'graphql-tag'

export const product = gql`
  query productDetail($productId: ID!) {
    product(productId: $productId) {
      productId
      title
      price
      thumbnailUrl
      imageUrls
      description
      quantity
      status
      isOutOfStock
      categoryIds
    }
    categories {
      categoryId
      name
    }
  }
`
