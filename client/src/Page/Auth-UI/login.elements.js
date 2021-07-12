import styled from 'styled-components';

export const LoginContainer = styled.div`
width: 100%;
max-width: 500px;
border-radius: 5px;
padding: 50px;
margin-bottom: 40px;
backgroud-color: #ffffff;
box-shadow: 0 2px 3px 0 rgba(0,0,0,0.2),0 2px 2px 0 rgba(0, 0, 0, 0.07);
text-align: center;
margin-right: auto;
margin-left: auto;
margin-top: 40px;
h2 {
	font-weight: 600;
	margin-bottom: 50px;
	font-size: 45px;
}
a {
	display: block;
	margin-top: 30px;
	color: #888888;
	font-size: 14px;
	text-decoration: none;
}

`;

export const InputGroup = styled.div`
margin-bottom: 24px;
text-align: left;
lable{
	display: inline-block;
	margin-bottom: 1rem;
	color: #888888;
}
`;

export const Input = styled.input`
width: 100%;
height: 50px;
outline: none;
padding: 8px 16px;
border: 1px solid #e0e6e8;
border-radius: 4px;
font-size: 1rem;
color: #888888;
transition: box-shadow 0.2s;
margin-top: 10px;
&::placeholder {
	color: #dedede;
}
&:focus {
	box-shadow: 0 0 0 2px rgb(169, 172, 255, 0.5 )
}
`;
export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;