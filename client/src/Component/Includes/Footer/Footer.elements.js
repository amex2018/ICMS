import styled from 'styled-components';

export const FooterContainer = styled.div`
   background-color: #101522;
   display: flex;
   flex-column: column;
   padding: 4rem 0px 2rem 0px;
   justify-content: center;
   algin-items: center; 
`;

export const FooterSubscribition = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-bottom: 24px;
padding: 24px;
color: #fff;
`;

export const FooterSubHeading = styled.p`
margin-bottom: 24px;
font-size: 22px;
font-family: roboto;
`;

export const FooterSubText = styled.p`
font-size: 20px;
margin-bottom: 24px;
font-family: roboto;
`;

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 700px){
	flex-direction: column;
	width: 100%;
}
`;

export const FormInput = styled.input`
   padding: 10px 20px;
   border-radius: 5px;
   margin-right: 10px;
   outline: none;
   border: none;
   font-size: 16px;
   border: 1px solid #fff;

   &::placeholder {
	   color: #242424;
   }

   @media screen and (max-width: 700px){
	   width: 100%;
	   margin: 0 0 16px 0;
   }
`;

export const FooterLinkContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
algin-items: center;
margin-top: -30px;
@media screen and (max-width: 700px){
   padding-top: 32px;
}
`;
export const FooterLinkWrapper = styled.div`
display: flex;

@media screen and (max-width: 700px){
   flex-direction: column;
}
`;

 export const FooterLinkItems = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 margin: 10px;
 text-align: left;
 width: 160px;
 box-sizing: border-box;
 color: #fff;

 @media  screen and (max-width: 700px){
    margin: 0;
    padding: 10px; 
    width: 100%;

 }
 `;


 export const FooterLinkTitle = styled.h2`
 margin-bottom: 10px;
 font-size: 16px;
 `;

 export const FooterLink = styled.a`
 color: #fff;
 text-decoration: none;
 margin-bottom: 0.4rem;
 font-size: 14px;
 &:hover {
    color: rgb(250, 16, 74);
    transition: 0.3s ease-out;
 }
 `;

 export const FooterImg = styled.img`
  width: 100px;
  height: 100px;
  border: none;
 `;