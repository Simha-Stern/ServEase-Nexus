import Footer from '../features/servants/components/footer';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react"



describe("Footer", () => {
  test("first test", () => {
  render(<Footer />)
  const linkElement = screen.getByText('Footer')
  expect(linkElement).toBeInTheDocument()
  })
 })
 