import styled from 'styled-components';

export const Table = styled.table`
margin-left: 40px;
width: 800px;
text-align: center;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
border-collapse: collapse;
// border: 2px solid grey;
`;

export const HeadTable = styled.thead`
background-color: cornflowerblue;
text-transform: uppercase;
height: 40px;
color: white;
`;

export const RowTable = styled.tr`
text-transform: uppercase;
height: 40px;

:nth-child(2n+1){
    background-color: azure;
}
:nth-child(2n){
    background-color: lightblue;
}
`;

export const FirstColumn = styled.td`
text-align: left;
padding-left: 100px;
width: calc(100% / 3);
text-transform: none;

`;
