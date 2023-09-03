// function Item({ name, isPacked }) {
//   if (isPacked) {
//     return (
//       <li className="ml-4">
//         {name} <span className="text-red-500">*</span>
//       </li>
//     );
//   } else {
//     return <li className="ml-4">{name}</li>;
//   }
// }

function Item({ name, isPacked }) {
  let temp = null;
  if (isPacked) {
    temp = <span className="text-red-500">*</span>;
  }
  return (
    <li className="ml-4">
      {/* {name} {isPacked ? <span className="text-red-500">*</span> : null} */}
      {/* {name} {isPacked && <span className="text-red-500">*</span>} */}
      {name} {temp}
    </li>
  );
}

export default Item;
