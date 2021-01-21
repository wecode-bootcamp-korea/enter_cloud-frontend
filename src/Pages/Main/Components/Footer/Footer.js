import React from "react";
import "../Footer/Footer.scss";
import { FooterData1, FooterData2 } from "./Footerdata";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <section className="footer_top">
          <button>EnterCloud</button>
          <div>
            <ul>
              {FooterData1.map((footertop) => (
                <li key={footertop.key}>{footertop.name}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="footer_mid">
          <ul className="footer_mid_ul">
            {FooterData2.map((footermid) => (
              <li key={footermid.key}>{footermid.name}</li>
            ))}
          </ul>
          <div className="footer_mid_button">
            <a href="https://blog.naver.com/spacecloud" target="_balnk">
              2
            </a>
            <a href="https://post.naver.com/spacecloud" target="_balnk">
              2
            </a>
            <a href="https://www.facebook.com/spaceclouding" target="_balnk">
              2
            </a>
            <a href="https://twitter.com/spacecloud_kr" target="_balnk">
              2
            </a>
            <a href="https://www.instagram.com/spacecloud.kr" target="_balnk">
              2
            </a>
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
