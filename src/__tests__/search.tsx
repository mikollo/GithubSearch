import React from "react";
import renderer from "react-test-renderer";
import App from "../App";
import sampleData from "../utils/sampleGithubResponse";
import mock from "xhr-mock";

beforeEach(() => mock.setup());
afterEach(() => mock.teardown());

test("Renders correctly", async () => {
  const tree = renderer.create(<App />);
  expect(tree.toJSON()).toMatchSnapshot();
});

test("Displays results after user types", async () => {
  // mock  github api
  mock.get("https://api.github.com/search/repositories?q=react", {
    status: 200,
    body: JSON.stringify(sampleData)
  });
  // render app
  const tree = renderer.create(<App />);
  // find TextInput and invoke search
  await tree.root
    .findByProps({ placeholder: "Search repos" })
    .props.onChangeText("react");
  // check snapshot correctness
  // however this generates a little bit too big snapshot
  // it could be improved
  expect(tree.toJSON()).toMatchSnapshot();
});
