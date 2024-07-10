// 1
// import { UserCard } from "./1-UserCard";
// export const App = () => {
//   console.log("fff");
//   return (
//     <div>
//       <UserCard name={"Alina"} age={20} />
//     </div>
//   );
// };

// 2. Создайте два компонента: ParentComponent и ChildComponent. Компонент ParentComponent должен передавать строку через пропсы в компонент ChildComponent, который будет её отображать.
// import { ParentComponent } from "./2-ParentComponent";
// export const App = () => {
//   return <ParentComponent />;
// };

// 3. Создайте компонент StyledButton, который принимает пропсы label и color. Кнопка должна отображать текст из пропса label и иметь цвет фона, заданный через пропс color.
// import { StyleButton } from "./3-StyleButton";
// export const App = () => {
//   return <StyleButton label="Press Me!!1!" color="green" />;
// };

// 4. Создайте компоненты ParentComponent и ChildComponent. В ChildComponent есть инпут, значение которого должно обновлять состояние в ParentComponent.
// import { ParentComponent } from "./4-ParentComponent";
// export const App = () => {
//   return <ParentComponent />;
// };

// 5. Создайте компонент Profile для отображения профиля пользователя, принимающий объект user через пропсы. Объект user должен содержать name, age и email.
// import { Profile } from "./5-Profile";
// export const App = () => {
//   const userObj = {
//     name: "Alina",
//     age: 20,
//     email: "hamovaa14@gmail.com",
//   };
//   return <Profile user={userObj} />;
// };

// 6. Создайте компонент Dashboard, который включает в себя несколько других компонентов: Header, Content и Footer. Каждый из этих компонентов должен получать пропсы для отображения своих данных.
// import { Dashboard } from "./6-Dashboard";
// export const App = () => {
//   return (
//     <Dashboard
//       headerText="Welcome to the Dashboard"
//       contentText="Here is the main content"
//       footerText="Footer information here"
//     />
//   );
// };

// 7. Создайте компонент Form, который управляет состоянием формы с помощью useState. Форма должна включать поля для имени пользователя и электронной почты. При отправке формы выводите данные в консоль.
// import { Form } from "./7-Form";
// import { useState } from "react";
// export const App = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   return (
//     <Form name={name} email={email} setName={setName} setEmail={setEmail} />
//   );
// };

// 8. Создайте компонент VisibilityToggle, который содержит два дочерних компонента: ContentA и ContentB. Используйте состояние для переключения видимости между этими компонентами по нажатию кнопки.
// import { VisibilityToggle } from "./8-VisibilityToggle";
// export const App = () => {
//   return <VisibilityToggle />;
// };

// 9
// import { Outer } from "./9-Outer";
// export const App = () => {
//   return <Outer outerText="Сюда дошла инфа из аутера" />;
// };

// 10. Создайте компоненты Parent и Child, где Parent передаёт функцию обратного вызова Child. При нажатии на кнопку в Child, эта функция вызывается, передавая данные обратно в Parent.

//     Требования:

//     Создайте компонент Child, который принимает функцию onButtonClick как проп.
//     В Parent создайте функцию, которая будет получать данные от Child и обновлять состояние Parent.
//     Передайте эту функцию в Child через пропсы.
//     В Child, добавьте кнопку, при нажатии на которую вызывается onButtonClick с передачей данных.
// import React from "react";
// import { Parent } from "./10-Parent";
// export const App = () => {
//   return <Parent />;
// };

// 11. Создайте компонент Modal, который отображает своё содержимое только когда активирован. Состояние активации контролируется через кнопку.

//     Требования:

//     Создайте компонент Modal, который принимает проп isVisible и отображает своё содержимое только если isVisible равно true.
//     Создайте компонент App с состоянием isModalOpen для управления видимостью Modal.
//     В App добавьте кнопку для переключения состояния isModalOpen.
//     Передайте значение isModalOpen как проп isVisible в Modal.
//     в Modal будет крестик который будет закрывать модалку - при нажатии на крестик в Modal переключаем состояния isModalOpen в false
// import { Modal } from "./11-Modal";
// import { useState } from "react";
// export const App = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const changeModalOpen = () => {
//     setModalOpen((prevState) => {
//       return !prevState;
//     });
//   };

//   return (
//     <div>
//       <button onClick={changeModalOpen}>Click here</button>
//       {isModalOpen && <Modal changeModalOpen={changeModalOpen} />}
//     </div>
//   );
// };
