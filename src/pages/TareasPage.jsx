import { Header } from "../components/Header";
import { TaskList } from "../components/TaskList";
import { useEffect } from "react";
import {
  Box, Tabs, TabList, TabPanels, Tab, TabPanel, Text, Center, ListItem, UnorderedList, Stack
} from '@chakra-ui/react';

const taskList = [{ "name": "Ayudar a mamá", "description": "Cuando se pueda", "state": false }]

export const Tareas = () => {
  useEffect((() => {
    const existingData = localStorage.getItem("tasks");
    if (existingData == null) {
      localStorage.setItem("tasks", JSON.stringify(taskList));
    }
  }), [])
  return (
    <Box>
        <Stack>
          <Header />
          <TaskList list={taskList} />
        </Stack>
    </Box>
  )
}