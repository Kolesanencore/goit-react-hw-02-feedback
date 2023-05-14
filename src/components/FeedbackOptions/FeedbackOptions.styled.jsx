import styled from '@emotion/styled';

export const Button = styled.button`
  width: 120px;
  padding: 10px 5px;
  background-color: #442d2d;
  font-size: 24px;
  border-radius: 4px;
  color: #ffffff;
  font-weight: bold;

  &:hover {
    color: #442d2d;
    background-color: #442d2d16;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 500px;
  margin: 0 auto;
  gap: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
