import {Flex, Heading} from '@chakra-ui/react'
import {FC} from 'react'

import {Catalogue} from '@/features/product'

export const Dashboard: FC = () => {
    return (
        <Flex flexGrow={1} w="100%" display-name="dashboard-flex" flexDir="column" gap="64px" p={4}>
            <Flex
                display-name="catalogue-flex"
                flexDir="column"
                w="100%"
                justify="center"
                align="center"
                gap={4}
                p={{base: '0 2px', xl: '0 8px'}}
            >
                <Heading size="lg" color="#1E355B" fontWeight="500">
                    Our Collection
                </Heading>
                <Catalogue/>
            </Flex>
        </Flex>
    )
}
