import styled ,{ createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* 
{
	box-sizing: border-box;
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
	    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
	    sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
`;

export const Container = styled.div`

z-index: 1;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 640px){
	padding-right: 30px;
	padding-left: 30px;
}
`;

export const Button = styled.button`
border-radius: 4px;
background: ${({primary}) => (primary ? 'rgb(248, 6, 87)' : 'rgb(248, 6, 87)')};
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
color: #fff;
font-size: ${({fontbig}) => fontbig ? '12px' : '16px'};
outline: none;
border: none;
cursor: pointer;

&:hover {
	transilation: all 0.3s ease-out;
	color: #fff;
	background: ${({primary}) => (primary ? 'rgb(248, 6, 87)' : 'rgb(248, 6, 87)')};
	}

@media screen and (max-width: 640px){
	width: 100%;
}
`;
export const Divider = styled.hr`
height: 5px;
width: 100px;
border: none;
background: rgb(250, 6, 87);
border-radius: 10px;
margin-bottom: 30px;
@media screen and (max-width: 700px){
        width: 20%;
}
`;
export default GlobalStyle
