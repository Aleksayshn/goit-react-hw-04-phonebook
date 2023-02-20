import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background-color: #e6f5f2;

  &:nth-child(even) {
    background-color: #f5f5f5;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 20px;
  color: #2c3e50;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  height: 40px;
  margin-left: 40px;
  background-color: #f07a56;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    background-color: #ff725c;
    transform: scale(1.05);
  }
`;