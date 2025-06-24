function Iran(props){
  // const { state , talk} = props;
  const { info} = props;
  const { state , talk} = info;
  // const state = props.state; // Alternative way to access props
  
  const m1 = `Hi ${talk} ,${state} I am from Iran`;
  
  return(
    <h2>{m1}</h2>
  );
}

export default Iran;