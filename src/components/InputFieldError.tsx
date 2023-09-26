import { motion } from "framer-motion";
import { InputFieldErrorPropsType } from "../types/InputFieldErrorPropsType";
import { MdError } from "react-icons/md";

export const InputFieldError = (props: InputFieldErrorPropsType) => {
    const error_animation = {
        initial: {opacity: 0, y: 10},
        animate: {opacity: 1, y: 0},
        exit: {opacity: 0, y: 10},
        transition: {duration: 0.2},
    }

    return (
        <motion.p 
            className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
            {...error_animation}
        >
            <MdError />
            {props.message}
        </motion.p>
    );
}