import styled from 'styled-components';

export const InfoSec = styled.div`
color: '#fff';
padding: 20px;
background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};
`;

export const TextWrapper = styled.div`
padding-bottom: 60px;
max-width: 540px;
padding-top: 0;
margin-top: 40px;
@media screen and (max-width: 700px){
	padding-bottom: 65px;
}
`;

export const Topline = styled.div`
color: ${({lightTopline}) => (lightTopline ? '#C5C5C5' : '#fff')};
font-size: 18px;
margin-bottom: 15px;
letter-spacing: 1.5px;
line-height: 16px;
`;

export const Heading = styled.h1`
color: ${({lightHeadline}) => (lightHeadline ? '#000' : '#fff')};
font-size: 48px;
margin-bottom: 20px;
letter-spacing: 1.1px;
`;

export const Subtitle = styled.p`
color: ${({lightSubtitle}) => (lightSubtitle ? '#000' : '#fff')};
max-width: 440px;
font-size: 20px;
letter-spacing: 1.6px;
margin-bottom: 20px;
`;

export const ImgWrapper = styled.div`
 max-width: 600px;
 display: flex;
 margin-top: 70px;
 justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
display: inline-block;
max-height: 400px;
`;
