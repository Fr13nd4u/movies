import * as yup from "yup";

const messageRequired = "This field is required";
const messageNumber = "That doesn't look like a number";
const messageYaerRange = "The year must be from 1900 to 2022";

export const addMovieFormSchema = yup.object().shape({
  title: yup.string().required(messageRequired),
  format: yup.string().required(messageRequired),
  year: yup
    .number()
    .min(1900, messageYaerRange)
    .max(2022, messageYaerRange)
    .required(messageRequired)
    .typeError(messageNumber),
  actors: yup.string().required(messageRequired),
});