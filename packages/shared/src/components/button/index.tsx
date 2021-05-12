interface ButtonProps {
    title: string;
}

const Button = (props: ButtonProps): JSX.Element => {
    const { title } = props;
    return (
        <div>
            <button>{title}</button>
        </div>
    )
};

export default Button;
