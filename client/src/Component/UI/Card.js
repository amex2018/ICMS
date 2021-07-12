import styled from 'styled-components';
const CardItem = ({widthSize, heightSize}) => {
	return(
            <Cards widthSize={widthSize} heightSize={heightSize}>                 
	   </Cards>
	)
}


export default CardItem

// css
const Cards = styled.div`
width: ${({widthSize}) => (widthSize ? '20%' : '30%')};
height: ${({heightSize}) => (heightSize ? '200px' : '100px')};
background: #eee;
border-radius: 20px;
display; flex;
`;