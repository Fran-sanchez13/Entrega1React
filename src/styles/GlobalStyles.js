import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
    --primary: #648375;
    --secondary: #174831;
    --lettering: #F5EFED;
    --lettering2: #212228;
    --bg:#004E29;
    --colorbg: #E8E8B4;
}
body{
 margin: 0;
 padding: 0;
 background: var(--lettering2);
 display:flex;
 flex-direction: column;
 }


`