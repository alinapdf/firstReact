1. Создайте компонент UserCard, который принимает пропсы name и age. Выведите имя и возраст пользователя в компоненте UserCard.

2. Создайте два компонента: ParentComponent и ChildComponent. Компонент ParentComponent должен передавать строку через пропсы в компонент ChildComponent, который будет её отображать.

3. Создайте компонент StyledButton, который принимает пропсы label и color. Кнопка должна отображать текст из пропса label и иметь цвет фона, заданный через пропс color.

4. Создайте компоненты ParentComponent и ChildComponent. В ChildComponent есть инпут, значение которого должно обновлять состояние в ParentComponent.

5. Создайте компонент Profile для отображения профиля пользователя, принимающий объект user через пропсы. Объект user должен содержать name, age и email.

6. Создайте компонент Dashboard, который включает в себя несколько других компонентов: Header, Content и Footer. Каждый из этих компонентов должен получать пропсы для отображения своих данных.

Использование Dashboard:
<Dashboard
      headerText="Welcome to the Dashboard"
      contentText="Here is the main content"
      footerText="Footer information here"
    />

7. Создайте компонент Form, который управляет состоянием формы с помощью useState. Форма должна включать поля для имени пользователя и электронной почты. При отправке формы выводите данные в консоль.

8. Создайте компонент VisibilityToggle, который содержит два дочерних компонента: ContentA и ContentB. Используйте состояние для переключения видимости между этими компонентами по нажатию кнопки.

9. Создайте компоненты Outer, Middle и Inner. Компонент Outer должен передавать данные через пропсы на Middle, а Middle — на Inner. Inner должен отображать данные.

10. Создайте компоненты Parent и Child, где Parent передаёт функцию обратного вызова Child. При нажатии на кнопку в Child, эта функция вызывается, передавая данные обратно в Parent.

    Требования:

    Создайте компонент Child, который принимает функцию onButtonClick как проп.
    В Parent создайте функцию, которая будет получать данные от Child и обновлять состояние Parent.
    Передайте эту функцию в Child через пропсы.
    В Child, добавьте кнопку, при нажатии на которую вызывается onButtonClick с передачей данных.

11. Создайте компонент Modal, который отображает своё содержимое только когда активирован. Состояние активации контролируется через кнопку.

    Требования:

    Создайте компонент Modal, который принимает проп isVisible и отображает своё содержимое только если isVisible равно true.
    Создайте компонент App с состоянием isModalOpen для управления видимостью Modal.
    В App добавьте кнопку для переключения состояния isModalOpen.
    Передайте значение isModalOpen как проп isVisible в Modal.
    в Modal будет крестик который будет закрывать модалку - при нажатии на крестик в Modal переключаем состояния isModalOpen в false
