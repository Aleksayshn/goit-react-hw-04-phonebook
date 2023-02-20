import PropTypes from 'prop-types';
import { Wrapper, Title } from './Container.styled';

export const Container = ({ title, children }) => (
  <Wrapper title={title}>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
