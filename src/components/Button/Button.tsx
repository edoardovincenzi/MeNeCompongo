import theme from '../../utils/theme';

interface IButton {
  color: string;
  label: string;
}

const Button = ({ color, label, ...props }: IButton) => {
  return (
    <button
      style={{
        color,
        backgroundColor: theme.palette.dark.background,
        borderRadius: theme.shape.borderRadius,
        padding: '0.5rem 1rem',
        border: 'none',
        boxShadow: theme.shadow.boxShadow,
      }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
