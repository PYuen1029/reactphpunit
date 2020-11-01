import React from "react";
import renderer from "react-test-renderer";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import NumberStat from "./NumberStat";

test("NumberStat component renders properly", () => {
  const data = {
    name: "tests",
    value: 5,
    icon: faCoffee,
  };

  const component = renderer.create(
    <NumberStat componentIdx={3} key={1} {...data} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="number-stat stat-item"
      style={
        Object {
          "borderLeftColor": "#fcf0cf",
        }
      }
    >
      <div
        className="number-stat-details"
      >
        <div
          className="number-stat-title"
          style={
            Object {
              "color": "#fcf0cf",
            }
          }
        >
          TESTS
        </div>
        <div
          className="number-stat-value"
        >
          5
        </div>
      </div>
      <div
        className="number-stat-icon"
      >
        <svg
          aria-hidden="true"
          className="svg-inline--fa fa-coffee fa-w-20 "
          data-icon="coffee"
          data-prefix="fas"
          focusable="false"
          role="img"
          style={Object {}}
          viewBox="0 0 640 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"
            fill="currentColor"
            style={Object {}}
          />
        </svg>
      </div>
    </div>
  `);
});
