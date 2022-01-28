const Button = (props) => {
    let style;
    if(props.isInverted){
        style = { width: "50%", backgroundColor: "orange", padding: "5px", margin: "5px", borderRadius: "5px", color: "white", border: "0.5px solid" };
    }else {
        style = { width: "50%", backgroundColor: "white", padding: "5px", margin: "5px", borderRadius: "5px", border: "0.5px solid" };
    }
    return(
        <button style={style}>{props.lable}</button>
    )
}

export default Button;