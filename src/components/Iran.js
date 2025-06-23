function Iran(props){
  const { state } = props;
  // const state = props.state; // Alternative way to access props
  
  const m1 = `Hi ${state} I am from Iran`;
  const m2 = `Hi ${city} how are you`;
  return(
    <h2>{m1}</h2>
  );
}

export default Iran;