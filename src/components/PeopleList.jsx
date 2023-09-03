function PeopleList({ peoples }) {
  // const peoplesCmp = []
  // for (let i = 0; i < peoples.length; i++) {
  //     peoplesCmp.push(<li>{peoples[i]}</li>)
  // }
  return (
    <ul>
      {/* {peoples.map(function (p) {
        return <li>{p}</li>;
      })} */}
      {peoples.map((p, index) => (
        <li key={`people-${index}`}>{p}</li>
      ))}
    </ul>
  );
}

export default PeopleList;
