import React from "react";
import renderer from "react-test-renderer";
import TestSuiteContainer from "../TestSuiteContainer";
import testData from "./testDataJson.json";

test("TestSuiteContainer component renders properly", () => {
  const component = renderer.create(
    //        <NumberStat componentIdx={3} key={1} {...data} />
    <TestSuiteContainer testData={testData} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="test-suite-container"
    >
      <h2 />
      <table>
        <thead>
          <tr>
            <th>
              Test Name
            </th>
            <th>
              Elapsed Time
            </th>
            <th>
              Failures
            </th>
            <th>
              Errors
            </th>
            <th>
              Skipped
            </th>
            <th>
              Test Count
            </th>
          </tr>
        </thead>
        <tbody
          className="test-suite collapsed"
        >
          <tr
            className="test-suite-overview"
            onClick={[Function]}
          >
            <td
              className="test-name"
            >
              <span
                className="arrow"
              />
               
              MyTests\\Customer\\AccountActionsTest
            </td>
            <td
              className="test-elapsed-time"
            >
              81.96
               s
            </td>
            <td
              className="test-failures color-success"
            >
              0
            </td>
            <td
              className="test-errors color-success"
            >
              0
            </td>
            <td
              className="test-skipped color-success"
            >
              0
            </td>
            <td
              className="test-count"
            >
              3
            </td>
          </tr>
          <tr
            className="expanded-details"
          >
            <td
              colSpan={6}
            >
              <div
                className="test-suite-details"
              >
                <div
                  className="test-suite-details-wrapper"
                >
                  No tests to display.
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody
          className="test-suite collapsed"
        >
          <tr
            className="test-suite-overview"
            onClick={[Function]}
          >
            <td
              className="test-name"
            >
              <span
                className="arrow"
              />
               
              MyTests\\Customer\\CreateCustomerTest
            </td>
            <td
              className="test-elapsed-time"
            >
              40.65
               s
            </td>
            <td
              className="test-failures color-success"
            >
              0
            </td>
            <td
              className="test-errors color-success"
            >
              0
            </td>
            <td
              className="test-skipped color-skip"
            >
              1
            </td>
            <td
              className="test-count"
            >
              2
            </td>
          </tr>
          <tr
            className="expanded-details"
          >
            <td
              colSpan={6}
            >
              <div
                className="test-suite-details"
              >
                <div
                  className="test-suite-details-wrapper"
                >
                  No tests to display.
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody
          className="test-suite collapsed"
        >
          <tr
            className="test-suite-overview"
            onClick={[Function]}
          >
            <td
              className="test-name"
            >
              <span
                className="arrow"
              />
               
              MyTests\\Customer\\ForgotPasswordTest
            </td>
            <td
              className="test-elapsed-time"
            >
              44.7
               s
            </td>
            <td
              className="test-failures color-failure"
            >
              1
            </td>
            <td
              className="test-errors color-success"
            >
              0
            </td>
            <td
              className="test-skipped color-success"
            >
              0
            </td>
            <td
              className="test-count"
            >
              2
            </td>
          </tr>
          <tr
            className="expanded-details"
          >
            <td
              colSpan={6}
            >
              <div
                className="test-suite-details"
              >
                <div
                  className="test-suite-details-wrapper"
                >
                  No tests to display.
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody
          className="test-suite collapsed"
        >
          <tr
            className="test-suite-overview"
            onClick={[Function]}
          >
            <td
              className="test-name"
            >
              <span
                className="arrow"
              />
               
              MyTests\\Customer\\LoggedInTest
            </td>
            <td
              className="test-elapsed-time"
            >
              15.55
               s
            </td>
            <td
              className="test-failures color-success"
            >
              0
            </td>
            <td
              className="test-errors color-success"
            >
              0
            </td>
            <td
              className="test-skipped color-success"
            >
              0
            </td>
            <td
              className="test-count"
            >
              1
            </td>
          </tr>
          <tr
            className="expanded-details"
          >
            <td
              colSpan={6}
            >
              <div
                className="test-suite-details"
              >
                <div
                  className="test-suite-details-wrapper"
                >
                  No tests to display.
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody
          className="test-suite collapsed"
        >
          <tr
            className="test-suite-overview"
            onClick={[Function]}
          >
            <td
              className="test-name"
            >
              <span
                className="arrow"
              />
               
              MyTests\\Customer\\NavigationTest
            </td>
            <td
              className="test-elapsed-time"
            >
              16.25
               s
            </td>
            <td
              className="test-failures color-success"
            >
              0
            </td>
            <td
              className="test-errors color-success"
            >
              0
            </td>
            <td
              className="test-skipped color-success"
            >
              0
            </td>
            <td
              className="test-count"
            >
              1
            </td>
          </tr>
          <tr
            className="expanded-details"
          >
            <td
              colSpan={6}
            >
              <div
                className="test-suite-details"
              >
                <div
                  className="test-suite-details-wrapper"
                >
                  No tests to display.
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody
          className="test-suite collapsed"
        >
          <tr
            className="test-suite-overview"
            onClick={[Function]}
          >
            <td
              className="test-name"
            >
              <span
                className="arrow"
              />
               
              MyTests\\Mobile\\MobileMenuTest
            </td>
            <td
              className="test-elapsed-time"
            >
              19.66
               s
            </td>
            <td
              className="test-failures color-success"
            >
              0
            </td>
            <td
              className="test-errors color-success"
            >
              0
            </td>
            <td
              className="test-skipped color-success"
            >
              0
            </td>
            <td
              className="test-count"
            >
              1
            </td>
          </tr>
          <tr
            className="expanded-details"
          >
            <td
              colSpan={6}
            >
              <div
                className="test-suite-details"
              >
                <div
                  className="test-suite-details-wrapper"
                >
                  No tests to display.
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody
          className="test-suite collapsed"
        >
          <tr
            className="test-suite-overview"
            onClick={[Function]}
          >
            <td
              className="test-name"
            >
              <span
                className="arrow"
              />
               
              MyTests\\Navigation\\BasicNavigationTest
            </td>
            <td
              className="test-elapsed-time"
            >
              104.77
               s
            </td>
            <td
              className="test-failures color-success"
            >
              0
            </td>
            <td
              className="test-errors color-success"
            >
              0
            </td>
            <td
              className="test-skipped color-success"
            >
              0
            </td>
            <td
              className="test-count"
            >
              4
            </td>
          </tr>
          <tr
            className="expanded-details"
          >
            <td
              colSpan={6}
            >
              <div
                className="test-suite-details"
              >
                <div
                  className="test-suite-details-wrapper"
                >
                  No tests to display.
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody
          className="test-suite collapsed"
        >
          <tr
            className="test-suite-overview"
            onClick={[Function]}
          >
            <td
              className="test-name"
            >
              <span
                className="arrow"
              />
               
              MyTests\\Navigation\\CheckoutNavigationTest
            </td>
            <td
              className="test-elapsed-time"
            >
              71.41
               s
            </td>
            <td
              className="test-failures color-success"
            >
              0
            </td>
            <td
              className="test-errors color-success"
            >
              0
            </td>
            <td
              className="test-skipped color-success"
            >
              0
            </td>
            <td
              className="test-count"
            >
              2
            </td>
          </tr>
          <tr
            className="expanded-details"
          >
            <td
              colSpan={6}
            >
              <div
                className="test-suite-details"
              >
                <div
                  className="test-suite-details-wrapper"
                >
                  No tests to display.
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody
          className="test-suite collapsed"
        >
          <tr
            className="test-suite-overview"
            onClick={[Function]}
          >
            <td
              className="test-name"
            >
              <span
                className="arrow"
              />
               
              MyTests\\Navigation\\ElementExistenceTest
            </td>
            <td
              className="test-elapsed-time"
            >
              76.22
               s
            </td>
            <td
              className="test-failures color-success"
            >
              0
            </td>
            <td
              className="test-errors color-success"
            >
              0
            </td>
            <td
              className="test-skipped color-success"
            >
              0
            </td>
            <td
              className="test-count"
            >
              5
            </td>
          </tr>
          <tr
            className="expanded-details"
          >
            <td
              colSpan={6}
            >
              <div
                className="test-suite-details"
              >
                <div
                  className="test-suite-details-wrapper"
                >
                  No tests to display.
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `);
});
