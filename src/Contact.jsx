import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">feel free to contact us</h2>
      <iframe
        title={Math.floor(Math.random() * 10)}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.3480195729296!2d73.07230666279791!3d19.301130258198725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd6e4f0288a1%3A0xad72aefc7435570!2sSagar%20Plaza%20hotel%20and%20restaurant!5e0!3m2!1sen!2sin!4v1672755446859!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mgebwwbp"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="Name"
              placeholder="Enter your name.."
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="E-mail"
              placeholder="E-mail"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              placeholder="type your message.."
              required
            ></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .common-heading {
    text-align: center;
    color: #15a300;
  }
  padding: 9rem 0 5rem 0;
  .container {
    margin-top: 6rem;
    text-align: center;
    .contact-form {
      max-width: 50rem;
      margin: auto;
      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;
export default Contact;
