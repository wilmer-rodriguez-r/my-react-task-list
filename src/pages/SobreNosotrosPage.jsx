import {
    Box, Tabs, TabList, TabPanels, Tab, TabPanel, Text, Center, ListItem, UnorderedList
} from '@chakra-ui/react';
import { Header } from '../components/Header';
export const SobreNosostros = () => {
    return (
        <>
        <Header></Header>
            <Center p='4' axis='both' textAlign={['left']}>
                <Box style={{ backgroundColor: 'white', height: "400px", width: "500px" }}>
                    <Tabs>
                        <TabList>
                            <Tab>Alcance</Tab>
                            <Tab>Funcionalidades</Tab>
                            <Tab>Tecnologias</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Text fontSize='3xl'>El objetivo de esta aplicación es que te ayude a organizar tus tareas y deberes pendiente para lograr todas tus metas a tiempo.</Text>
                            </TabPanel>
                            <TabPanel>
                                <Text fontSize='3xl'>Esta es un aplicación que permite registrar tareas y ver su estado actual, es decir si se encuentran completas o no. </Text>
                            </TabPanel>
                            <TabPanel>
                                <Text fontSize='3xl'>Las tecnologias que se usaron para construir esta pagina web fueron las siguientes.</Text>
                                <UnorderedList>
                                    <ListItem>
                                        <Text fontSize='3xl'>Node.js</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text fontSize='3xl'>React</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text fontSize='3xl'>JavaScript</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text fontSize='3xl'>HTML</Text>
                                    </ListItem>
                                </UnorderedList>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Center>
        </>
    )
}