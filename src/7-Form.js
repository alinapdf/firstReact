// 7
// export const Form = (props) => {
//   function setValueIntoConsole(e) {
//     e.preventDefault();
//     console.log(props.name);
//     console.log(props.email);
//   }
//   return (
//     <form action="#" onSubmit={setValueIntoConsole}>
//       <div>
//         <label htmlFor="name">
//           Name
//           <input
//             type="text"
//             id="name"
//             value={props.name}
//             onChange={(e) => props.setName(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label htmlFor="email">
//           Email
//           <input
//             type="text"
//             id="email"
//             value={props.email}
//             onChange={(e) => props.setEmail(e.target.value)}
//           />
//         </label>
//       </div>
//       <div className="Btn">
//         <button>Press Me</button>
//       </div>
//     </form>
//   );
// };
