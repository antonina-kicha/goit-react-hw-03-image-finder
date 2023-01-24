import styled from 'styled-components';

export const Friends = styled.ul`
padding: 0;
margin: 40px auto ;
list-style: none;
width: 480px
`;

export const FriendCard = styled.li`
display: flex;
align-items: center;
gap: 20px;
padding: 20px;
margin-bottom: 15px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Status = styled.span`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: ${({ isOnline }) => {return isOnline ? 'green' : 'red'}};
`;

export const Name = styled.span`
font-size: 42px;
`;
