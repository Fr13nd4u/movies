import React, { FC } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IMovie } from "../../interfaces";
import { addMovieFormSchema } from "./AddMovieSchema";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addMovie } from "../../redux/movies/ActionCreators";

interface IAddMovieForm {
  setActive: (item: boolean) => void;
}

const AddMovieForm: FC<IAddMovieForm> = ({ setActive }) => {
  // const { movies } = useAppSelector((state) => state.moviesReducer);

  const dispatch = useAppDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IMovie>({
    resolver: yupResolver(addMovieFormSchema),
  });

  const onSubmit = (data: any) => {
    data.id = Date.now();
    data.actors = data.actors.split(", ");
    dispatch(addMovie(data));
    reset();
    setActive(false);
  };

  // const isUnique = (title: string) => {
  //   return title.length > 2;
  // };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input
          type="text"
          className={errors.title && "error"}
          {...register("title")}
        />
        {errors.title && <p>{errors.title.message}</p>}
      </div>
      <div>
        <label>Format</label>
        <input
          type="text"
          className={errors.format && "error"}
          {...register("format")}
        />
        {errors.format && <p>{errors.format.message}</p>}
      </div>
      <div>
        <label>Release Year</label>
        <input
          type="text"
          className={errors.year && "error"}
          {...register("year")}
        />
        {errors.year && <p>{errors.year.message}</p>}
      </div>
      <div>
        <label>Stars</label>
        <input
          type="text"
          className={errors.actors && "error"}
          {...register("actors")}
        />
        {errors.actors && <p>{errors.actors.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  width: 33vw;

  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    padding: 10px 15px;
    margin-bottom: 10px;
    background: #fff;
    color: rgba(0, 0, 0, 0.6);
  }

  .error {
    background: #f20000;
    border: 1px solid #f20000;
  }

  label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-bottom: 13px;
    margin-top: 20px;
    font-size: 18px;
  }

  p {
    color: red;
  }

  button {
    margin-top: 30px;
    width: 100%;
  }
`;

export default AddMovieForm;
