import { HTMLMotionProps, motion } from "framer-motion";
import { FC, ReactElement } from "react";

const Button: FC<HTMLMotionProps<"button"> & {}> = ({children, onClick=()=>{}}):ReactElement => {
    return <>
        <motion.button 
            onClick={onClick} 
            whileHover={{ scale: 1.1 }} 
            whileTap={{scale: .9}} 
            className="bg-blue-300 border-0 rounded-3xl px-3 py-6 text-white font-medium uppercase outline-none cursor-pointer"
        >{children}</motion.button>
    </>
}

export default Button;