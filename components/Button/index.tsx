import styled from "@emotion/styled";
import { HTMLMotionProps, motion } from "framer-motion";
import { FC, ReactElement } from "react";

const ButtonEl = styled(motion.button)({
    background: "var(--color-base)",
    border: 0,
    borderRadius: 25,
    padding: "12px 25px",
    color: "white",
    fontWeight: 500,
    textTransform: "uppercase",
    outline: 0,
    cursor: "pointer"
});

const Button: FC<HTMLMotionProps<"button"> & {}> = ({children, onClick=()=>{}}):ReactElement => {
    return <>
        <ButtonEl onClick={onClick} whileHover={{ scale: 1.1 }} whileTap={{scale: .9}} >{children}</ButtonEl>
    </>
}

export default Button;