import { Link } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
export const Menu = () => {
    return (
        <>
        <Breadcrumb>
        <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
            <BreadcrumbLink href='/about-us'>Sobre Nosotros</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
            <BreadcrumbLink href='/tasks'>Tareas</BreadcrumbLink>
        </BreadcrumbItem>
        </Breadcrumb>
    </>
    );
}