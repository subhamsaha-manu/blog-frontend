import {Text} from '@chakra-ui/layout'
import {Box, Flex, Heading, useColorModeValue, useDisclosure} from '@chakra-ui/react'
import {FC} from 'react'
import {useNavigate} from 'react-router-dom'

export const LandingPageHeader = () => {
    const {isOpen, onToggle} = useDisclosure()

    return (
        <Box display-name="landing-page-header-box" position="sticky" top="0" zIndex={1500}>
            <Flex
                display-name="landing-page-header-flex"
                bg="#e5e2db"
                color={useColorModeValue('gray.600', 'white')}
                minH="60px"
                h={{base: '60px', xl: '120px'}}
                p={{base: '5px 10px', xl: '15px 100px'}}
                borderBottom={1}
                borderStyle="solid"
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align="center"
                justify="center"
            >
                <Heading size="lg" color="#1E355B" fontWeight="500">
                    Blog Frontend App
                </Heading>
            </Flex>
        </Box>
    )
}

type MobileNavProps = {
    menuOptions: { label: string; path: string }[]
    onToggle: () => void
}
const MobileNav: FC<MobileNavProps> = ({menuOptions, onToggle}) => {
    const navigate = useNavigate()

    return (
        <Flex
            flexDir="column"
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{md: 'none'}}
        >
            {menuOptions.map(({label, path}) => (
                <Flex
                    display-name="mobile-nav-menu-options-flex"
                    key={label}
                    _hover={{cursor: 'pointer', background: 'gray.100'}}
                    onClick={() => {
                        onToggle()
                        navigate(path)
                    }}
                    h="50px"
                    p={2}
                    align="center"
                >
                    <Text fontSize="md" color="subtle">
                        {label}
                    </Text>
                </Flex>
            ))}
        </Flex>
    )
}
