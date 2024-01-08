export const MODAL_BUTTON = {
  CANCEL: "cancel-btn",
  ACTION: "action-btn",
} as const;

type ModalButton = keyof typeof MODAL_BUTTON;

export default ModalButton;
