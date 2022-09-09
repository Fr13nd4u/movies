import React, { FC } from "react";
import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IMovie } from "../../interfaces";
import { addMovieFormSchema } from "./AddMovieSchema";
import { useAppDispatch } from "../../hooks/redux";
import { addMovie } from "../../redux/movies/ActionCreators";

interface IAddMovieForm {
  setActive: (item: boolean) => void;
}

const AddMovieForm: FC<IAddMovieForm> = ({ setActive }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    reset,
    control,
    clearErrors,
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

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input
          type="text"
          className={errors.title && "error"}
          {...register("title")}
          onClick={() => clearErrors("title")}
        />
        {errors.title && <p>{errors.title.message}</p>}
      </div>
      <div>
        <label>Format</label>
        <Controller
          control={control}
          name="format"
          rules={{ required: "format is required" }}
          render={({ field: { onChange } }) => (
            <select onChange={onChange} defaultValue="">
              <option value="" className="select-placeholder" disabled>
                choose format
              </option>
              <option value="VHS">VHS</option>
              <option value="DVD">DVD</option>
              <option value="Blu-Ray">Blu-Ray</option>
            </select>
          )}
        />

        {errors.format && <p>{errors.format.message}</p>}
      </div>
      <div>
        <label>Release Year</label>
        <input
          type="text"
          className={errors.year && "error"}
          {...register("year")}
          onClick={() => clearErrors("year")}
        />
        {errors.year && <p>{errors.year.message}</p>}
      </div>
      <div>
        <label>Stars</label>
        <input
          type="text"
          className={errors.actors && "error"}
          {...register("actors")}
          onClick={() => clearErrors("actors")}
        />
        {errors.actors && <p>{errors.actors.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  width: 33vw;

  input,
  select {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    padding: 10px 15px;
    margin-bottom: 10px;
    background: #fff;
    color: rgba(0, 0, 0, 0.6);
  }

  option,
  select {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
  }

  .select-placeholder {
    display: none;
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
