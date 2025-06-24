function Country(props){
    const { countryInfo } = props;
    const { country, state } = countryInfo;
    const message = `Country is ${country} and state is ${state}`;

    return(
        <h2>{message}</h2> 
    );
}

export default Country;