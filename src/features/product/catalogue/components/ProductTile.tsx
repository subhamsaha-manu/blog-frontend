import { Text } from '@chakra-ui/layout'
import { Flex, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Product } from '@/types'

type ProductTileProps = {
  product: Product
}

export const ProductTile: FC<ProductTileProps> = ({ product }) => {
  const navigate = useNavigate()
  const { medias, price, productId, title } = product

  const hoverAnimation = {
    scale: 1.05,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  }

  return (
    <motion.div
      whileHover={hoverAnimation}
      style={{
        cursor: 'pointer',
        overflow: 'hidden',
        backgroundColor: '#fff',
        position: 'relative',
        borderRadius: '12px',
      }}
      onClick={() => navigate(`/product/${productId}`)}
    >
      <Flex flexDir="column" borderRadius={2} display-name="product-tile-flex">
        <Image
          src={medias[0]}
          alt={title}
          borderRadius="4px"
          borderBottomRadius={0}
          loading="lazy"
          width="100%"
          aspectRatio="3/4"
          style={{ transition: 'transform 0.3s ease-in-out' }}
        />
        <Flex
          flexDir="column"
          p="15px"
          bgColor="rgba(255, 255, 255, 0.75)"
          backdropFilter="blur(10px)"
          borderRadius="0 0 12px 12px"
          boxShadow="0px 4px 12px rgba(0, 0, 0, 0.05)"
          position="relative"
        >
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="#1E355B"
            textAlign="center"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            _hover={{
              color: '#FF6363',
              transition: 'color 0.3s',
            }}
          >
            {title}
          </Text>

          <Flex alignItems="center" justifyContent="center" mt="8px">
            <Text
              fontSize="md"
              fontWeight="600"
              color="#555"
              ml="4px"
              _hover={{
                color: '#FF6363',
                transition: 'color 0.3s',
              }}
            >
              Rs. {price.toFixed(2)}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
  )
}
