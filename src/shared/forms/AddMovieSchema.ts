import * as yup from "yup";

const messageRequired = "This field is required";
const messageNumber = "That doesn't look like a number";
const messagePositiveNumber = "A year cannot be negative";

export const addMovieFormSchema = yup.object().shape({
  title: yup.string().required(messageRequired),
  format: yup.string().required(messageRequired),
  year: yup
    .number()
    .required(messageRequired)
    .typeError(messageNumber)
    .positive(messagePositiveNumber),
  actors: yup.string().required(messageRequired),
});