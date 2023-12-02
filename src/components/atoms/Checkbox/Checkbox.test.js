import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckboxWithGreenCheck from "./Checkbox";

describe("checkbox renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<CheckboxWithGreenCheck/>);
    expect(asFragment()).toMatchSnapshot();
  });

  test("checkbox can be clicked", () => {
    let checked = false;
    const handleChange = jest.fn();

    const { container } = render(
      <CheckboxWithGreenCheck
        checked={checked}
        onChange={handleChange}
        data-testid="checkBox"
      />
    );
    screen.getByTestId("checkBox");
    userEvent.click(container.querySelector("input"));
    expect(handleChange).toHaveBeenCalled();
  });
});
