import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 12px 20px;
  color: #212121;
  font-size: 20px;
  font-weight: 600;
  background-color: #e6f5f2;
  border-radius: 8px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    color: #457c78;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  margin-left: 20px;
  padding: 8px 12px;
  outline: none;
  border-radius: 4px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    border: 2px solid #009688;
  }
`;
