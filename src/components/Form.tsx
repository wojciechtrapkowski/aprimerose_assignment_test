import React from "react"
import { InputField } from "./InputField"
import { useForm, FormProvider } from "react-hook-form"
import { InputFieldPropsType } from "../types/InputFieldPropsType";
import { nameValidation } from "../utils/validations/nameValidation";
import { emailValidation } from "../utils/validations/emailValidation";
import { messageValidation } from "../utils/validations/messageValidation";
import { GrMail } from 'react-icons/gr'
import { toast } from "react-toastify";
import { FormHeader } from "./FormHeader";

export const Form = () => {
    const methods = useForm({mode: "onChange"});

    const onSubmit = methods.handleSubmit(data => {
        console.log(data);
        toast.success('Form submitted!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
        });
        methods.reset();
    })

    const inputFieldCSS = "w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60";

    const name_props : InputFieldPropsType = {
        type: "text",
        label: "name",
        name: "name",
        id: "name",
        placeholder: "Enter your name",
        validation: nameValidation,
        multiline: false,
        className: inputFieldCSS,
    }

    const email_props : InputFieldPropsType = {
        type: "text",
        label: "email",
        name: "email",
        id: "email",
        placeholder: "Enter your e-mail",
        validation: emailValidation,
        multiline: false,
        className: inputFieldCSS,
    }

    const message_props : InputFieldPropsType = {
        type: "",
        label: "message",
        name: "message",
        id: "message",
        placeholder: "Enter your message",
        validation: messageValidation,
        multiline: true,
        className: inputFieldCSS,
    }

    return (
        <FormProvider {...methods}>
            <div className="flex justify-center items-center min-h-screen">
                <form 
                    onSubmit={e => e.preventDefault()}
                    noValidate
                    className="w-full max-w-3xl p-5 text-center shadow-2xl p-13 pt-14 pb-14" 
                >
                    <FormHeader />
                    <div className="mx-auto mt-5 text-center">
                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <InputField 
                                {...name_props}
                                />
                            </div>
                            <div >
                                <InputField 
                                {...email_props}
                                />
                            </div>
                            <div className="md:col-span-2">
                                <InputField 
                                {...message_props}
                                />
                            </div>
                        </div>  
                    </div>
                    <div className="mt-10 flex justify-center items-center">
                        <button
                            onClick={onSubmit}
                            className="flex items-center gap-1 bg-cobalt p-4 px-10 font-semibold text-white rounded-md hover:bg-cobaltDark tracking-wide"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </FormProvider>
    )
}