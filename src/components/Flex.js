import styled from 'styled-components'

export const DnFlex = styled.div`
	display: flex;
	overflow: hidden;
	flex-wrap: wrap;

	flex-direction: ${props => props.direction};
`;

export const DnFlexItem = styled.div`
	flex: ${props => props.md};	

	@media (max-width: 700px) {
		flex: ${props => props.xs};
	}
`;

export const BnBox = styled.div`
	padding: 15px 10px;
`;
