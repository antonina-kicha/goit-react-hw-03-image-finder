import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 420px;
  margin: 40px auto;
  border-radius: 6px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  text-align: center;
  padding: 40px 0;
  color: rgba(117, 117, 117, 1);
  font-size: 24px;
  font-weight: 500;
  line-height: 0.8;


`;

export const Image = styled.img`
    border-radius: 50%;
    margin-bottom: 20px;
`;

export const Name = styled.p`
    padding: 10px 0;
    color: rgba(33, 33, 33, 1);
    font-size: 26px;
    font-weight: 700;
`;


export const Stats = styled.ul`
  display: flex;
  width: 100%;
  height: 140px;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: rgb(245, 245, 245);
`;

export const StatsItem = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(217, 217, 217, 1);

  :not(:last-child){
      border-right: 1px solid rgba(217, 217, 217, 1);
  }
`;

export const StatsLabel = styled.span`
  color: rgba(117, 117, 117, 1);
  font-size: 22px;
  padding-bottom: 10px;
`;

export const StatsQuantity = styled.span`
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  font-weight: 700;
`;