function Srilanka(props){
    const { slInfo } = props;
    const { m1, m2, m3 } = slInfo;
    const message = `${m1} ${m2} `;
    return(
        <div>
            <p>Hi da makkale nan than ungal paari nee siricha rommba alaga iruppa </p>
            <h5>{message}</h5>
        </div>
    );
}

export default Srilanka;