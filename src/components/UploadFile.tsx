import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { parseFile } from "../shared/helpers/parseFile";
import { useAppDispatch } from "../hooks/redux";
import { setMovies } from "../redux/movies/ActionCreators";
import Modal from "../shared/Modal";

const UploadFile: FC = () => {
  const [selectedFile, setSelectedFile] = useState<string>("");
  const [fileName, setFileName] = useState<string>();
  const [modalActive, setModalActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const changeHandler = (event: any) => {
    const input = event.target;
    const reader = new FileReader();

    if (input.files[0].type !== "text/plain") {
      setModalActive(true);
    } else {
      setFileName(input.files[0].name);

      reader.onload = () => {
        const text = reader.result?.toString();
        text && setSelectedFile(text);
      };
      reader.readAsText(input.files[0]);
    }
  };

  useEffect(() => {
    if (parseFile(selectedFile)[0] !== null && fileName) {
      dispatch(setMovies(parseFile(selectedFile)));
    } else if (parseFile(selectedFile)[0] == null && fileName) {
      setModalActive(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFile, dispatch]);

  return (
    <UploadFileWrapper>
      <label>
        <input type="file" name="file" onChange={changeHandler} />
        upload file
      </label>
      <p>{fileName}</p>

      <Modal title="Warning" active={modalActive} setActive={setModalActive}>
        <ModalContent>
          <h3>
            The file must be in text format only or the text does not fit the
            format!
          </h3>
          <button onClick={() => setModalActive(false)}>OK</button>
        </ModalContent>
      </Modal>
    </UploadFileWrapper>
  );
};

const UploadFileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;

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

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    margin-bottom: 30px;
  }
`;

export default UploadFile;
