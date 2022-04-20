import * as React from "react";
import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

type Props = PropsWithChildren<{
  open: boolean;
  handleClose: () => void;
  title?: string;
}>;

export const BasicModal = ({
  open = false,
  handleClose,
  children,
  title,
}: Props) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] border-2 border-[#000] shadow-lg bg-[#d7eceb]">
          {title && <h3 className="text-center py-[15px] pt-[20px]">{title}</h3>}
          {children}
        </Box>
      </Modal>
    </div>
  );
};
