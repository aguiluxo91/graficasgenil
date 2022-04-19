import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import service from "../pages/api/services/budget-service";
import { isValidPhoneNumber } from "libphonenumber-js";
import AOS from 'aos';
import "aos/dist/aos.css";
const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



const validations = {
    name: (value) => {
        let message;
        if (!value) {
            message = "El nombre es requerido";
        } else if (value.length < 4) {
            message = "El nombre necesita al menos 4 caracteres"
        }
        return message
    },
    email: (value) => {
        let message;
        if (!value) {
            message = 'Un email válido es requerido';
        } else if (!EMAIL_PATTERN.test(value)) {
            message = 'El Email no es válido';
        }
        return message;
    },
    tlf: (value) => {
        let message;
        if (!value) {
            message = 'Número de teléfono es requerido'
        } else if (!isValidPhoneNumber(value, "ES")) {
            message = 'Un número de telefono válido es requerido'
        }
        return message;
    },
    text: (value) => {
        let message;
        if (!value) {
            message = "El texto es requerido";
        }
        return message
    },
};

export default function Budget() {

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, [])

    const [state, setState] = useState({
        contact: {
            name: "",
            email: "",
            tlf: "",
            text: "",
        },
        errors: {
            name: validations.name(),
            email: validations.email(),
            tlf: validations.tlf(),
            text: validations.text(),
        },
        touch: {},
    });

    const isValid = () => {
        const { errors } = state;
        return !Object.keys(errors).some(error => errors[error]);
    };

    const handleBlur = (event) => {
        const { name } = event.target;
        setState(state => ({
            ...state,
            touch: {
                ...state.touch,
                [name]: true
            }
        }));
    }

    const handleChange = (event) => {
        let { name, value } = event.target;

        setState(state => {
            return {
                ...state,
                contact: {
                    ...state.contact,
                    [name]: value,
                },
                errors: {
                    ...state.errors,
                    [name]: validations[name] && validations[name](value),
                },
            };
        });
    };
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Sending...');
        if (isValid()) {
            try {
                const data = { ...state.contact }
                await service.sendMail(data);
                setState(() => {
                    return {
                        contact: {
                            name: "",
                            email: "",
                            tlf: "",
                            text: "",
                        },
                        errors: {
                            name: validations.name(),
                            email: validations.email(),
                            tlf: validations.tlf(),
                            text: validations.text(),
                        },
                        touch: {},
                    }
                })
                router.push('/');
            } catch (error) {
                console.error(error)
            }
        }
    }

    const { contact, errors, touch } = state;


    return (
        <form onSubmit={handleSubmit} className="flex w-full space-x-3 mx-auto" id="presupuesto" data-aos="zoom-in">
            <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                    Pide Presupuesto
                </div>
                <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                    <div className="col-span-2 lg:col-span-1">
                        <div className=" relative ">
                            <input type="name" name="name" id="contact-form-name" onBlur={handleBlur} onChange={handleChange} value={contact.name} required className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${touch.name && errors.name ? "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" : ""}`} placeholder="Nombre..." />
                            {touch.name && errors.name ?
                                <div className="mt-2 text-pink-600 text-sm">{errors.name}</div> : ""
                            }
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <div className="relative ">
                            <input type="text" name="tlf" id="contact-form-tlf" onBlur={handleBlur} onChange={handleChange} value={contact.tlf} required className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${touch.tlf && errors.tlf ? "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" : ""}`} placeholder="Teléfono de contacto" />
                            {touch.tlf && errors.tlf ?
                                <div className="mt-2 text-pink-600 text-sm">{errors.tlf}</div> : ""
                            }
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="relative ">
                            <input type="text" name="email" id="contact-form-email" onBlur={handleBlur} onChange={handleChange} value={contact.email} className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${touch.email && errors.email ? "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" : ""}`} placeholder="Email de contacto..." required />
                            {touch.email && errors.email ?
                                <div className="mt-2 text-pink-600 text-sm">{errors.email}</div> : ""
                            }
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label className="text-gray-700" htmlFor="name">
                            <textarea name="text" type="text" onBlur={handleBlur} onChange={handleChange} value={contact.text} className={`flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent ${touch.text && errors.text ? "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" : ""}`} id="text" placeholder="Detalla tu pedido..." rows="5" cols="40" required>
                            </textarea>
                        </label>
                        {touch.text && errors.text ?
                            <div className="mt-2 text-pink-600 text-sm">{errors.text}</div> : ""
                        }
                    </div>
                    <div className="col-span-2 text-right">
                        <button type="submit" className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" disabled={!isValid()}>
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}



