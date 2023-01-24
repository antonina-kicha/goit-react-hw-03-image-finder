import styled from 'styled-components';

export const StatisticsSection = styled.section`
margin: 0 auto;
  width: 700px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
padding: 40px;
font-size: 40px;
text-transform: uppercase;
text-align: center;
`;

export const StatList = styled.ul`
display: flex;
width: 100%;
height: 140px;
padding: 0;
margin: 0;
list-style: none;
background-color: grey;
`;

export const StatsItem = styled.li`
  width: calc(100% / ${({ count }) =>  count });
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;

  :not(:last-child){
      border-right: 1px solid rgba(217, 217, 217, 1);
  }
`;

export const StatsLabel = styled.span`
  font-size: 28px;
  padding-bottom: 10px;
`;

export const StatsPercentage = styled.span`
  font-size: 36px;
  font-weight: 500;
`;