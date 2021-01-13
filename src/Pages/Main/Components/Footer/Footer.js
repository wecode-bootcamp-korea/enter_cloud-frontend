import React from "react";
import "../Footer/Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <section className="footer_top">
          <button>EnterCloud</button>
          <div>
            <ul>
              <li>블로그</li>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>운영정책</li>
              <li>고객 문의</li>
            </ul>
          </div>
        </section>
        <section className="footer_mid">
          <ul className="footer_mid_ul">
            <li>상호명 : 주식회사 앤스페이스</li>
            <li>대표 : 정수현</li>
            <li>사업자등록번호 : 230-81-03117</li>
            <li>통신판매업신고번호 : 2018-서울강남-04590</li>
            <li>
              <button>사업자등록정보</button>
            </li>
            <li>영업소재지 : 서울특별시 강남구 삼성로 414</li>
            <li>email : office@spacecloud.kr</li>
            <li>대표전화 : 1599-4312 (평일 오후2시 ~ 오후6시)</li>
            <li>온라인 1:1 문의 바로가기 (평일 오전10시 ~ 오후6시)</li>
            <li>
              * 공간에 대한 문의사항은 해당 공간 호스트에게 직접 문의하세요.
            </li>
          </ul>
          <div className="footer_mid_button">
            <button>2</button>
            <button>2</button>
            <button>2</button>
            <button>2</button>
            <button>2</button>
          </div>
        </section>
        <section className="footer_bottom">
          <span>
            스페이스클라우드는 통신판매중개자이며 통신판매의 당사자가 아닙니다.
            따라서 스페이스클라우드는 공간 거래정보 및 거래에 대해 책임지지
            않습니다
          </span>
          <button>Copyright NSPACE Corp. All Rights Reserved</button>
        </section>
      </div>
    );
  }
}

export default Footer;
