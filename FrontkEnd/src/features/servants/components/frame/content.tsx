import Home from "../options/home";
import { Fragment } from "react";
import Services from "./services";

const Content = ({
  selectedOption,
}: {
  selectedOption: string;
}): React.ReactElement => {
  return (
    <Fragment>
      {selectedOption === "" && <Home />}
      {selectedOption === "services" && <Services />}
      {/* Consider adding error boundaries or loading states */}
      {selectedOption !== "" && selectedOption !== "services" && (
        <p>No content for the selected option.</p>
      )}
    </Fragment>
  );
};

export default Content;
