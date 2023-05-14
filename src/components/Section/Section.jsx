import PropTypes from 'prop-types';
import { H2 } from './Section.styled';
export const Section = ({ title, children }) => (
  <div>
    <H2>{title}</H2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
