function Student(props) {
  const scores = props.scores.map((object, index) => {
    return <Score key={index} date={object.date} score={object.score} />;
  });

  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.bio}</h3>
      <p>{scores}</p>
    </div>
  );
}

export default Student;
