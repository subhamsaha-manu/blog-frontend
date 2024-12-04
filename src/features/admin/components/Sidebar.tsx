import { Flex, Text } from '@chakra-ui/react'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { RecordIcon } from 'hugeicons-react'
import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import useCurrentUserContext from '@/context/CurrentUserContextProvider'

export const Sidebar: FC = () => {
  const {
    currentUser: { name },
  } = useCurrentUserContext()

  const navigate = useNavigate()

  const AccordionTitle: FC<{ title: string; iconSize: number }> = ({ title, iconSize }) => {
    return (
      <Flex gap={4} align="center">
        <RecordIcon size={iconSize} fill="#000000" />
        <Text fontSize="md">{title}</Text>
      </Flex>
    )
  }

  return (
    <Flex display-name="account-nav" color="#666" flexDir="column" boxShadow="md">
      <Flex p="30px 0" justify="center" align="center">
        <Text size={{ base: 'md', xl: 'lg' }} fontWeight="bold">
          Hi, {name}
        </Text>
      </Flex>
      {/*<Flex flexDir="column" align="stretch">*/}
      {/*  <Link to="">*/}
      {/*    <Flex*/}
      {/*      display-name="account-nav-item"*/}
      {/*      align="center"*/}
      {/*      gap={4}*/}
      {/*      p={{ base: '0 10px', xl: '0 20px' }}*/}
      {/*      cursor="pointer"*/}
      {/*      h="53px"*/}
      {/*      borderTop="1px solid #f6f6f6"*/}
      {/*      _hover={{ bg: 'gray.200' }}*/}
      {/*    >*/}
      {/*      <CheckListIcon size={20} color="#000000" />*/}
      {/*      <Text fontSize="md">All Orders</Text>*/}
      {/*    </Flex>*/}
      {/*  </Link>*/}
      {/*  <Link to="products">*/}
      {/*    <Flex*/}
      {/*      display-name="account-nav-item"*/}
      {/*      align="center"*/}
      {/*      gap={4}*/}
      {/*      p={{ base: '0 10px', xl: '0 20px' }}*/}
      {/*      cursor="pointer"*/}
      {/*      h="53px"*/}
      {/*      borderTop="1px solid #f6f6f6"*/}
      {/*      _hover={{ bg: 'gray.200' }}*/}
      {/*    >*/}
      {/*      <CheckListIcon size={20} color="#000000" />*/}
      {/*      <Text fontSize="md">All Products</Text>*/}
      {/*    </Flex>*/}
      {/*  </Link>*/}
      {/*  <Link to="categories">*/}
      {/*    <Flex*/}
      {/*      display-name="account-nav-item"*/}
      {/*      align="center"*/}
      {/*      gap={4}*/}
      {/*      p={{ base: '0 10px', xl: '0 20px' }}*/}
      {/*      cursor="pointer"*/}
      {/*      h="53px"*/}
      {/*      borderTop="1px solid #f6f6f6"*/}
      {/*      _hover={{ bg: 'gray.200' }}*/}
      {/*    >*/}
      {/*      <CheckListIcon size={20} color="#000000" />*/}
      {/*      <Text fontSize="md">All Categories</Text>*/}
      {/*    </Flex>*/}
      {/*  </Link>*/}
      {/*  <Flex*/}
      {/*    display-name="account-nav-item"*/}
      {/*    align="center"*/}
      {/*    gap={4}*/}
      {/*    p={{ base: '0 10px', xl: '0 20px' }}*/}
      {/*    cursor="pointer"*/}
      {/*    h="53px"*/}
      {/*    borderTop="1px solid #f6f6f6"*/}
      {/*    _hover={{ bg: 'gray.200' }}*/}
      {/*    onClick={() => {*/}
      {/*      storage.clearItem(USER_ID)*/}
      {/*      storage.clearItem(TOKEN)*/}
      {/*      navigate('/')*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <Logout04Icon size={20} color="#000000" />*/}
      {/*    <Text fontSize="md">Logout</Text>*/}
      {/*  </Flex>*/}
      {/*</Flex>*/}

      <Accordion variant="light">
        <AccordionItem
          key="1"
          aria-label="Catalog"
          title={<AccordionTitle title="Catalog" iconSize={10} />}
        >
          <Link to="products">
            <Flex
              display-name="account-nav-item"
              align="center"
              gap={4}
              p={{ base: '0 10px', xl: '0 10px' }}
              cursor="pointer"
              h="53px"
              borderTop="1px solid #f6f6f6"
              _hover={{ bg: 'gray.200' }}
            >
              <AccordionTitle title="Products" iconSize={10} />
            </Flex>
          </Link>
          <Link to="product/add">
            <Flex
              display-name="account-nav-item"
              align="center"
              gap={4}
              p={{ base: '0 10px', xl: '0 10px' }}
              cursor="pointer"
              h="53px"
              borderTop="1px solid #f6f6f6"
              _hover={{ bg: 'gray.200' }}
            >
              <AccordionTitle title="Add Product" iconSize={10} />
            </Flex>
          </Link>
          <Link to="categories">
            <Flex
              display-name="account-nav-item"
              align="center"
              gap={4}
              p={{ base: '0 10px', xl: '0 10px' }}
              cursor="pointer"
              h="53px"
              borderTop="1px solid #f6f6f6"
              _hover={{ bg: 'gray.200' }}
            >
              <AccordionTitle title="Categories" iconSize={10} />
            </Flex>
          </Link>
          <Link to="category/add">
            <Flex
              display-name="account-nav-item"
              align="center"
              gap={4}
              p={{ base: '0 10px', xl: '0 10px' }}
              cursor="pointer"
              h="53px"
              borderTop="1px solid #f6f6f6"
              _hover={{ bg: 'gray.200' }}
            >
              <AccordionTitle title="Add Category" iconSize={10} />
            </Flex>
          </Link>
        </AccordionItem>
      </Accordion>
    </Flex>
  )
}
