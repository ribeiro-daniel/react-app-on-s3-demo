import { darken, transparentize } from "polished";
import styled from "styled-components";

const colors = {
    green: "#33cc95",
    red: "#e52e4d",
  };

export const RadioBox = styled.button<{
    isActive: boolean;
    activeColor: "green" | "red";
  }>`
    height: 4rem;
    border: 1px solid var(--input-border);
  
    background: ${(props) =>
      props.isActive
        ? transparentize(0.9, colors[props.activeColor])
        : "transparent"};
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    transition: border-color 0.2s;
  
    &:hover {
      border-color: ${darken(0.1, "#d7d7d7")};
    }
  
    img {
      width: 20px;
      height: 20px;
    }
  
    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }
  `;
