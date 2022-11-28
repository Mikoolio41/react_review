function Hello(props) {
  console.log(props);

  return (
    <>
      <h1>Hello {props.name}!</h1>
      <h2>You are {props.age} years old,</h2>
      <h3>You live in {props.city}</h3>
    </>
  );
}

export default Hello;
