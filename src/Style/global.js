import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    :root {
        --black: #000;
        --white: #FFF;
        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --opacity-color: #12121480;
        --shadow: #0c0c0c;
        --error: #ff1f44;

        --toastify-color-success: #3FE864;
        --toastify-color-error: #E83F5B;
        --toastify-color-light: #343B41;
        --toastify-text-color-light: #F8F9FA;
    }
    body {
        background: var(--grey-4);
    }
    button{
        cursor: pointer;
        outline: none;
    }
    ul,ol,li {
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 20px;
        background-color: var(--grey-2);
    }
    @media (max-width: 425px) {
        ::-webkit-scrollbar{
            width: 1px;
        }
        ::-webkit-scrollbar-thumb{
            background-color: transparent;
        }
    }
    @media (min-width: 1600px){
        .Toastify {
            font-size: 2rem;
        }
        .Toastify__toast-icon{
            width: 40px;
        }
        .Toastify__progress-bar{
            height: 10px;
        }
        .Toastify__close-button > svg{
            height: 32px;
    width: 30px;
        }
        :root {
            --toastify-toast-width: 500px;
            --toastify-toast-min-height: 100px;
            --toastify-toast-max-height: 1000px;
        }
    }
`;
