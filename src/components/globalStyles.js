import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`

body, .wrapper, h1, h4, a, p, img, .input {
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
   .services {
    border-top: 2px solid ${({ theme }) => theme.border};
   }
   .services:last-child {
    border-bottom: 2px solid ${({ theme }) => theme.border};
}
.input {
  border-bottom: 2px solid ${({ theme }) => theme.input};
}

.input:focus {
  border-bottom: 2px solid ${({ theme }) => theme.input__focus};
}

.input_error {
  border-bottom: 2px solid ${({ theme }) => theme.error};
}
.input_error:focus {
  border-bottom: 2px solid ${({ theme }) => theme.error};
}
  `
