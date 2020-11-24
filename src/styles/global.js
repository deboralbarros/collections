import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

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
        font: 1rem Poppins, sans-serif;
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
