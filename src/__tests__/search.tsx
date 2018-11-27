import React from "react";
import renderer from "react-test-renderer";
import App from "../App";
import sampleData from "../utils/sampleGithubResponse";
import mock from "xhr-mock";

beforeEach(() => mock.setup());
afterEach(() => mock.teardown());

test("Renders correctly", async () => {
  const testRendererInstance = renderer.create(<App />);
  expect(testRendererInstance.toJSON()).toMatchSnapshot();
});

test("Displays results after user types", done => {
  // mock  github api
  mock.get("https://api.github.com/search/repositories?q=react", {
    status: 200,
    body: JSON.stringify(sampleData)
  });

  // render app
  const testRendererInstance = renderer.create(<App />);
  // find TextInput and invoke search
  testRendererInstance.root
    .findByProps({ placeholder: "Search repos" })
    .props.onChangeText("react");
  // this is somewhat hacky
  // way to run check after all actions have been executed
  // but it is independent of implementation details
  setTimeout(() => {
    expect(
      testRendererInstance.root.findByProps({ children: "facebook/react" })
    ).toBeDefined();
    expect(testRendererInstance.toJSON()).toMatchSnapshot();
    done();
  }, 5);
});
