import './CalculatorButton.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function CalculatorButton({ label, onClick }) {
  const isWide = label === '0';
  return (
    <button
      type="button"
      className={`calculator-button ${isWide ? 'wide' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

CalculatorButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CalculatorButton;
