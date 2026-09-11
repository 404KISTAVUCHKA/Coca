import intlTelInput from "intl-tel-input";
import "intl-tel-input/styles";

export const usePhone = () => {
  const input = document.querySelector("#phone");
  
  intlTelInput(input, {
    loadUtils: () => import("intl-tel-input/utils"),
  });
};