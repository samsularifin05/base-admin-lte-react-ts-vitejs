import React from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "redux-form";
import {
  AppActionUtility,
  RootState,
  UtilityState,
  utilityActions,
} from "@/reduxStore";
import { ThunkDispatch } from "redux-thunk";

interface ModalGlobalProps {
  children: React.ReactNode;
  title?: string;
  namaForm: string;
  width?: number | 100;
  isOpen?: boolean;
  hideModal?: () => void;
}

const ModalGlobal: React.FC<ModalGlobalProps> = (props) => {
  const { children, title, namaForm } = props;
  const utility = useSelector<RootState<string>, UtilityState<string>>(
    (state) => state.utility
  );
  const dispatch =
    useDispatch<
      ThunkDispatch<RootState<string>, null, AppActionUtility<string>>
    >();

  const handleCancel = () => {
    dispatch(reset(`${namaForm}`));

    dispatch(
      utilityActions.showModal({
        isModalShow: false,
        isEdit: false,
        data: [],
        namaForm: "",
      })
    );
  };

  return (
    <Modal
      title={title || ""}
      style={{ top: 20 }}
      open={utility.getModal.isModalShow}
      keyboard={false}
      maskClosable={false}
      footer={null}
      width={props.width}
      onCancel={handleCancel}
    >
      {children}
    </Modal>
  );
};
const ModalLocal: React.FC<ModalGlobalProps> = (props) => {
  const { children, title, namaForm, isOpen, hideModal } = props;

  const dispatch =
    useDispatch<
      ThunkDispatch<RootState<string>, null, AppActionUtility<string>>
    >();

  const handleCancel = () => {
    dispatch(reset(`${namaForm}`));
    hideModal?.(); // Call hideModal as a function
  };

  return (
    <Modal
      title={title || ""}
      style={{ top: 20 }}
      open={isOpen}
      keyboard={false}
      maskClosable={false}
      footer={null}
      width={props.width}
      onCancel={handleCancel}
    >
      {children}
    </Modal>
  );
};

export { ModalGlobal, ModalLocal };
