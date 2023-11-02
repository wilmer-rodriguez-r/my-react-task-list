import { useState } from "react";
import { FormTask } from "./formTask";
import { Checkbox, Text, Button } from "@chakra-ui/react";
export const Task = (props) => {

    const [inputVisible, setInputVisible] = useState(false);
    const { name, description, isCompleted, onChangeCheck, onDelete, onEditTask } = props;

    const handleChangeCheck = () => {
        onChangeCheck(name);
    };

    const handleDelete = () => {
        onDelete(name);
    };

    const handleEdit = () => {
        setInputVisible(true);
    }

    const handleEditTask = (task) => {
        onEditTask(name, task)
    }

    return (
        <li>
            <>
                <Checkbox colorScheme='green' checked={isCompleted} onChange={handleChangeCheck} style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
                    <Text>
                        {name}
                    </Text>
                    <Text>
                        Description: {description}
                    </Text>
                </Checkbox>
                <div>
                    <Button disabled={isCompleted} onClick={handleEdit} colorScheme="blue"> Edit </Button>
                    <Button onClick={handleDelete} colorScheme="blue"> Delete </Button>
                </div>
                <div>
                    {inputVisible && <FormTask onChangeTask={handleEditTask} />}
                </div>
            </>
        </li>
    );
}