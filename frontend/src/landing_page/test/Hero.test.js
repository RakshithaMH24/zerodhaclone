import React from "react";
import { render , screen } from "@testing-library/react";
import "@testing-library/jest-dom /extend-expect";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", ()=>{
  Text("renders hero image",() =>{
    render(<Hero/>);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBEInTheDocument();
    expect(heroImage).toHaveAttribute("src","media/homeHero.png")
  });
});