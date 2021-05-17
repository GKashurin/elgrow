import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`

.wrapper, h1, h4, a, p, img, .input {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  .contacts__desc, .input::placeholder, .feedback, .stack__item > div {
    color: ${({ theme }) => theme.text__grey};
  }
 .service__skill > span {
    background-color: ${({ theme }) => theme.text__grey};
 }
  .button {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body}
  }
    
  `
