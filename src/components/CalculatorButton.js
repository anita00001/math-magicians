import './CalculatorButton.css';
import PropTypes from 'prop-types';

function CalculatorButton({ label }) {
  const isWide = label === '0';
  return (
    <button
      type="button"
      className={`calculator-button ${isWide ? 'wide' : ''}`}
    >
      {label}
    </button>
  );
}

CalculatorButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CalculatorButton;
