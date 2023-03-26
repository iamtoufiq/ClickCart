import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <strong>
            <h3>Are you prepared to begin?</h3>
            <h3>Contact us now.</h3>
          </strong>

          <div className="contact-short-btn">
            <NavLink to="/">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section  */}

      <footer>
        <div className="container grid grid-four-column">
          {/* 1st number column */}
          <div className="footer-about">
            <h3 className="heading-shadow">Toufiq Choudhari</h3>
            <p className="text-shadow">
              Things aren’t always #000000 and #FFFFFF .
            </p>
          </div>

          {/* 2nd number column */}
          <div className="footer-subscribe">
            <h3>
              <strong className="heading-shadow">
                Send an email to get new updates.
              </strong>
            </h3>
            <form action="https://formspree.io/f/xwkjklkd" method="POST">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="E-mail"
                name="primeMember"
              />
              <input type="submit" value="Prime" />
            </form>
          </div>

          {/* 3rd number column  */}
          <div className="footer-social">
            <h3>
              <strong className="heading-shadow">Follows Us</strong>
            </h3>
            <div className="footer-social--icons">
              <div>
                <a
                  href="https://twitter.com/iamtoufiq15"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://m.facebook.com/chaudhary.toufiqahd?eav=AfbWWGqhbiEip6BjE99mFGCNRj3fpeY8vu-gnypO0VoMjm9ENJofBbkxzlSg920Nq2k&paipv=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="icons" />
                </a>
              </div>

              <div>
                <a
                  href="https://www.linkedin.com/in/toufiq-choudhari-56208b203/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 4th number column  */}
          <div className="footer-contact">
            <h3>
              <strong className="heading-shadow">Call Us</strong>
            </h3>
            <h3>
              <a href="tel:9359550208" className="color-white text-shadow">
                9359550208
              </a>
              <br />
              <a
                href="mailto:imtoufiq2@gmail.com"
                className="color-white text-shadow"
              >
                imtoufiq2@gmail.com
              </a>
            </h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p className="text-shadow">
              @{new Date().getFullYear()} All Rights Reserved
            </p>
            <div className="text-shadow">
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1.6rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }
  .heading-shadow {
    text-shadow: red 2px 2px 2px;
  }
  .text-shadow {
    text-shadow: green 2px 2px 2px;
  }
  .color-white {
    color: #fff;
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: green;
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom--section {
      padding-top: 9rem;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
