import React, { useEffect } from 'react';
import { InputFieldPropsType } from '../types/InputFieldPropsType';
import { useFormContext } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { MdError } from 'react-icons/md'
import { InputFieldErrorPropsType } from '../types/InputFieldErrorPropsType';
import { InputFieldError } from './InputFieldError';

export const InputField = (props: InputFieldPropsType) => {
    const { register, formState: {errors} } = useFormContext();

    const inputError = errors[props.name];

    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
                <label htmlFor={props.id} className="capitalize">
                    {props.label}
                </label>
                <AnimatePresence mode="wait" initial={false}>
                    {inputError !== undefined && (
                        <InputFieldError 
                            {...{ 
                                message: inputError?.message?.toString() || "",
                                key: inputError?.message?.toString() || "",
                            }}
                        />
                    )}
                </AnimatePresence>
            </div>
            {props.multiline ? (
                <textarea
                    id={props.id}
                    className={props.className + ' min-h-[15rem] max-h-[20rem] resize-y'}
                    placeholder={props.placeholder}
                    {...register(props.name, props.validation)}
                />
            ) :  <input
                    id={props.id}
                    type={props.type}
                    className={props.className}
                    placeholder={props.placeholder}
                    {...register(props.name, props.validation)}
                />
            }
        </div>
    );
}
