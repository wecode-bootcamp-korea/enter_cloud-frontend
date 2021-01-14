import React from "react";
import "./SignUp.scss";

export class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      nickname: "",
      email: "",
      password: "",
      repassword: "",
      checkPassword: "",
    };
  }

  componentDidMount() {
    document.body.style.backgroundColor = "#f6f6f6";
  }

  handleSignUpInfo = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  //비밀번호 입력 체크
  handlePwCheck = () => {
    const { password, repassword, checkPassword } = this.state;

    if (password === repassword) {
      this.setState({
        checkPassword: "비밀번호 일치합니다.",
      });
    } else {
      this.setState({
        checkPassword: "비밀번호 일치하지 않습니다.",
      });
    }
    console.log(
      this.state.email,
      this.state.nickname,
      password,
      repassword,
      checkPassword
    );
  };

  render() {
    const { nickname, email, password, repassword } = this.state;
    return (
      <main className="SignUp common_wrap">
        <h2>회원가입</h2>
        <section className="signup_box common_box">
          <ul className="signup_social common_social">
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
              id="nickname"
              type="text"
              placeholder="닉네임"
              value={nickname}
              onChange={this.handleSignUpInfo}
            />
            <input
              id="email"
              type="text"
              placeholder="이메일"
              value={email}
              onChange={this.handleSignUpInfo}
            />
            <input
              id="password"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={this.handleSignUpInfo}
            />
            <input
              id="repassword"
              type="password"
              placeholder="비밀번호 확인"
              value={repassword}
              onChange={this.handleSignUpInfo}
            />
          </form>
          <p className="agree_check">
            <input id="agree_all" type="checkbox" />
            <label for="agree_all">아래 약관에 모두 동의합니다.</label>
          </p>
          <p className="or"></p>
          <ul className="agree_check">
            <li>
              <input id="agree_service" type="checkbox" />
              <label for="agree_service">
                <span className="underline">서비스 이용약관 (필수)</span>
              </label>
            </li>
            <li>
              <input id="agree_privacy" class="underline" type="checkbox" />
              <label for="agree_privacy">
                <span className="underline">개인정보 처리 방침 (필수)</span>
              </label>
            </li>
            <li>
              <input id="agree_service" type="checkbox" />
              <label for="agree_sms">
                이벤트 등 프로모션 알림 SMS 수신 (선택)
              </label>
            </li>
            <li>
              <input id="agree_mail" type="checkbox" />
              <label for="agree_mail">
                이벤트 등 프로모션 알림 메일 수신 (선택)
              </label>
            </li>
          </ul>
          <button
            className="signup_button btn_submit"
            onClick={this.handlePwCheck}
            onKeyUp={this.handlePwCheck}
          >
            회원가입
          </button>
        </section>
      </main>
    );
  }
}
