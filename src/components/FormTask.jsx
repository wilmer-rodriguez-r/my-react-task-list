import { useState } from "react";
import { Box, Button, Center, Stack, Textarea } from "@chakra-ui/react";
export const FormTask = (props) => {

    const { onChangeTask } = props;
    const [nameTask, setNameTask] = useState("");
    const [description, setDescription] = useState("");
    const [formValidation, setFormValidation] = useState({ taskName: undefined, });

    function handleNameTaskChange(event) {
        const value = event.target.value;
        setFormValidation({ ...formValidation, taskName: value.length < 4 ? "name is too short" : "" });
        setNameTask(value);
    }

    function handleDescriptionChange(event) {
        const value = event.target.value;
        setDescription(value)
    }

    const isValidForm = Object.keys(formValidation).every((key) => formValidation[key] === "");

    function onSubmit() {
        event.preventDefault();
        const task = { name: nameTask, description: description, state: false };
        onChangeTask(task);
    }

    return (
        <form onSubmit={onSubmit}>
                    <Stack>
                        <label>Name:
                            <Textarea placeholder='New Task' value={nameTask} onChange={handleNameTaskChange} type="text" />
                        </label>
                        {formValidation.taskName && <span style={{ color: "red" }}>{formValidation.taskName}</span>}
                        <label>Description: </label>
                        <Textarea placeholder='Description' value={description} onChange={handleDescriptionChange} type="text" />
                        <Button disabled={!isValidForm} onClick={onSubmit} colorScheme="blue"> Sumbit </Button>
                    </Stack>
        </form>
    );
}