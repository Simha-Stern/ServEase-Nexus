import Footer from "../features/servants/components/frame/footer";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  test("first test", () => {
    render(<Footer />);
    const linkElement = screen.getByText("Footer");
    expect(linkElement).toBeInTheDocument();
  });
});
