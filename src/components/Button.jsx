import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ color = 'white', text, onClick }) => {
	return (
		<button
			className={classNames({
				btn: true,
				[color]: true,
			})}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

Button.propTypes = {
	color: PropTypes.oneOf(['white', 'blue', 'orange', 'outline-orange', 'outline-blue']),
	text: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
