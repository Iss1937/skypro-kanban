import { PopUser } from "../popups/PopUser";

export const Header = () => {
  return (
    <header class="header">
      <div class="container">
        <div class="header__block">
          <div class="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div class="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav class="header__nav">
            <button class="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <PopUser />
          </nav>
        </div>
      </div>
    </header>
  );
};
