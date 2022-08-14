import type { NextComponentType } from 'next';
import { Box, useColorModeValue } from '@chakra-ui/react';

const Navbar: NextComponentType = () => {
	const bgNavbarColor = useColorModeValue('green.300', 'green.500');
	return(
		<div>
			<Box bg={bgNavbarColor} w="100%" p={4} color="white">
				Poom Yimyuean
			</Box>
		</div>
	)
};

export default Navbar;