import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

const ErrorPage = () => {
  const Wrapper = styled.section`
    padding: 9rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .btn {
      font-size: 1.8rem;
      margin-top: 3rem;
    }
  `;
  return (
    <Wrapper>
      <img
        src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"
        alt={Math.floor(Math.random() * 10)}
        style={{ border: "2px solid blue", width: "50vw", padding: "2rem" }}
      />

      <NavLink to="/">
        <Button className="btn">Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

export default ErrorPage;
