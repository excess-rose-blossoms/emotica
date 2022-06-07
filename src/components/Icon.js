export const Icon = ({ icon, ...props }) => {
    return (
        <img src={icon} alt={props.alt} {...props}/>
    );
};

export default Icon;