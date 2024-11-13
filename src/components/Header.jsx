import HeaderLogo from "../images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={HeaderLogo}
        alt="Logo alrededor de usa"
      />
      <hr id="line" />
    </header>
  );
}
