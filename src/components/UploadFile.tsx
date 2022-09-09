import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { parseFile } from "../helpers/parseFile";
import { useAppDispatch } from "../hooks/redux";
import { setMovies } from "../redux/movies/ActionCreators";

const UploadFile: FC = () => {
  const [selectedFile, setSelectedFile] = useState<string>("");
  const [fileName, setFileName] = useState<string>();
  const dispatch = useAppDispatch();

  const changeHandler = (event: any) => {
    const input = event.target;
    const reader = new FileReader();
    setFileName(input.files[0].name);

    reader.onload = () => {
      const text = reader.result?.toString();
      text && setSelectedFile(text);
    };
    reader.readAsText(input.files[0]);
  };

  useEffect(() => {
    fileName && dispatch(setMovies(parseFile(selectedFile)));
  }, [selectedFile, dispatch]);

  return (
    <UploadFileWrapper>
      <label>
        <input type="file" name="file" onChange={changeHandler} />
        upload file
      </label>
      <p>{fileName}</p>
    </UploadFileWrapper>
  );
};

const UploadFileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    font-size: 22px;
    background: #fff;
    color: rgba(0, 0, 0, 0.75);
    padding: 10px 25px;
    border-radius: 25px;
    cursor: pointer;
  }

  p {
    font-size: 18px;
    margin-left: 20px;
  }

  input[type="file"] {
    display: none;
  }
`;

export default UploadFile;
