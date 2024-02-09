import logo from "../../assets/logo-white.svg";
import styled from "styled-components";

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0px;
  margin-bottom: 10px;

  a {
    color: #ffffff;
    text-decoration: none;
    width: 100%;
    padding: 20px;
  }
`;

function Nav() {
  return (
    <Navbar>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <a href="#">How does this work?</a>
      </div>
    </Navbar>
  );
}

export default Nav;
