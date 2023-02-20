import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  color: #1a1a1a;
  font-size: 24px;
  font-weight: 600;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    color: #42ffc0;
  }
`;

export const Input = styled.input`
  min-width: 280px;
  margin-left: 20px;
  padding: 12px;
  outline: none;
  border-radius: 4px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid #42ffc0;

  &:hover,
  :focus {
    border: 2px solid #1a1a1a;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 48px;
  width: 160px;
  background-color: #42ffc0;
  color: #fff;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    background-color: #1a1a1a;
    transform: scale(1.05);
  }
`;