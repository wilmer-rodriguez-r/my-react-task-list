import { useTask } from "../hooks/useTask";
import { Task } from "./Task";;
import { FormTask } from "./formTask";
import { Box, Center, Checkbox, HStack } from "@chakra-ui/react";
export const TaskList = () => {

    const [tasks, createTask, changeState, deleteTask, updateTask] = useTask();

    function handleCheckBox(taskName) {
        changeState(taskName);
    };

    function handleDeleteTask(taskName) {
        deleteTask(taskName);
    };

    function handleEditTask(taskName, newTaskName) {
        updateTask(taskName, newTaskName)
    };

    return (
        <>
            <Box >
                <Center>
                    <HStack align={"left"} spacing='100px'>
                        <FormTask onChangeTask={createTask} />
                        <ul>
                            {
                                tasks.map(task => <Task
                                    key={task.name}
                                    name={task.name}
                                    description={task.description}
                                    isCompleted={task.state}
                                    onChangeCheck={handleCheckBox}
                                    onDelete={handleDeleteTask}
                                    onEditTask={handleEditTask} />)
                            }
                        </ul>
                    </HStack>
                </Center>
            </Box>
        </>
    );
};