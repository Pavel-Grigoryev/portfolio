import React, {useState} from 'react';
import sCont from '../../common/styles/Container.module.scss';
import s from './Contact.module.scss'
import Button from "../button/Button";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {appAPI} from "../../api/app-api";
import {AxiosError} from "axios";


export const Contact = () => {

    const [isFormSending, setIsFormSending] = useState<boolean>(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        initialStatus: {
            sent: false,
            msg: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().required('Required').email('Invalid email address'),
            message: Yup.string().required('Required')
        }),
        validate: () => {
            if (formik.status.msg) {
                formik.setStatus({sent: false,
                    msg: ''})
            }
        },
        onSubmit: async (values, formikHelpers) => {
            setIsFormSending(true);
            try {
                const res = await appAPI.sendEmail(values);
                debugger
                formik.resetForm();
                formikHelpers.setStatus({
                    sent: true,
                    msg: res.data
                })// Pass more if you need)
          } catch (e) {
                const err = e as Error | AxiosError;
                debugger
                formikHelpers.setStatus({
                    sent: false,
                    msg: `${err.message}. Please try again later.`
                })
            } finally {
                setIsFormSending(false)
                setTimeout(() => {
                    formikHelpers.setStatus({sent: false,
                        msg: ''})
                }, 7000)
            }

        }
    })


    return (
        <section className={s.contact} id={"contact"}>
            <div className={`${sCont.container}`}>
                <h2 className={s.title}>Contact</h2>
                <form onSubmit={formik.handleSubmit} className={!isFormSending ? `${s.form}` :  `${s.form} ${s.formSend}`}>
                    <div className={s.inputTextWrap}>
                        <input type="text" placeholder={"Name"}
                               className={s.inputText}
                               disabled={isFormSending}
                               {...formik.getFieldProps("name")}/>
                        {formik.touched.name && formik.errors.name &&
                            <div className={s.error}>{formik.errors.name}</div>}</div>
                    <div className={s.inputTextWrap}>
                        <input type="email" placeholder={"Email"}
                               className={s.inputText}
                               disabled={isFormSending}
                               {...formik.getFieldProps("email")}/>
                        {formik.touched.email && formik.errors.email &&
                            <div className={s.error}>{formik.errors.email}</div>}</div>
                    <div className={s.inputTextWrap}>
                        <input type="textarea" placeholder={"Message"}
                               className={s.inputTextArea}
                               disabled={isFormSending}
                               {...formik.getFieldProps("message")}/>
                        {formik.touched.message && formik.errors.message &&
                            <div className={s.error}>{formik.errors.message}</div>}
                        {formik.status && formik.status.msg && (
                            <p className={`${s.alert} ${formik.status.sent ? "" : s.alertError}`}>
                                {formik.status.msg}
                            </p>
                        )}
                    </div>
                    <div className={s.butCont}>
                        <Button type={"submit"} title={"Send Message"} disabled={isFormSending}/>
                    </div>
                </form>
            </div>
        </section>
    );
};

//Types

export type ValuesType = {
    name: string
    email: string
    message: string
}