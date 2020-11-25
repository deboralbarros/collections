import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        background-color: #1C110A;
    }

    body, input, button {
        font: 1.2rem Ubuntu;
    }

    button {
        cursor: pointer;
    }

    #main-container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 10px;
        
    }
`;
