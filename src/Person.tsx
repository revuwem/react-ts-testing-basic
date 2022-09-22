import React from "react";

const Person = ({ name }: { name: string }) => (
  <div role="contentinfo">Hello, {name}</div>
);

export default Person;
