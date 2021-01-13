import React from "react";
import "./Login.scss";

export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    document.body.style.backgroundColor = "#f6f6f6";
  }

  handleLoginInfo = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  checkValidation = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const checkEmail = email.includes("@");
    const checkPw = password.length >= 4;

    if (checkEmail && checkPw) {
      alert("로그인 성공!");
      this.props.history.push("/Main");
    }
    if (!checkEmail) {
      alert("이메일은 @를 포함해야 합니다");
    }
    if (!checkPw) {
      alert("비밀번호는 4자리 이상이어야 합니다");
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <main className="Login">
          <h2>로그인</h2>
          <section className="login_box">
            <ul className="login_social">
              <li clasName="naver">
                <button>네이버로 로그인</button>
              </li>
              <li clasName="kakao">
                <button>카카오로 로그인</button>
              </li>
              <li clasName="apple">
                <button>Apple로 로그인</button>
              </li>
            </ul>
            <p className="or">
              <span>또는</span>
            </p>
            <form>
              <input
                id="email"
                type="text"
                placeholder="이메일"
                value={email}
                onChange={this.handleLoginInfo}
              />
              <input
                id="password"
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={this.handleLoginInfo}
              />
            </form>
            <button
              className="login_button"
              onClick={this.checkValidation}
              onKeyup={this.checkValidation}
            >
              이메일로 로그인
            </button>
            <p className="text_signup">
              아직 엔터클라우드 회원이 아니신가요?
              <a href="/SignUp">회원가입</a>
            </p>
          </section>
        </main>
      </>
    );
  }
}

export default Login;
