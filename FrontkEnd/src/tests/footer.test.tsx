import Footer from "../features/servants/components/layout/footer";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  test("first test", () => {
    render(<Footer />);
    const linkElement = screen.getByText("Footer");
    expect(linkElement).toBeInTheDocument();
  });
});
