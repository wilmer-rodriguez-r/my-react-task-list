import { AbsoluteCenter, Box, Text, background } from "@chakra-ui/react";
export const Home = () => {
    const containerStyles = {
        background: "url('https://c1.wallpaperflare.com/preview/1/1010/561/table-work-computer-study-reading.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        minHeight: "100vh",
    };
    return (
        <>
            <Box style={containerStyles}>
                <AbsoluteCenter p='4' axis='both' style={{ backgroundColor: "white", opacity: 0.8 }} textAlign={['center']}>
                    <Text fontSize='6xl' as="b">Bienvenido</Text>
                    <Text fontSize='3xl'>Esta página web te ayudara a ordenar tus deberes</Text>
                </AbsoluteCenter>
            </Box>
        </>
    );
}