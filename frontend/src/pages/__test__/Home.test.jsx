import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "../Home";

describe('Home', () => {
  // Test to find the title 'CMS'
  it('should render the correct heading element', async () => {
    render(<Home />)
    const headingElement = screen.getByText('CMS')
    expect(headingElement).toBeInTheDocument()
  })
})