import React from "react";

export interface TestComponentProps {
  text: string;
}

const TestComponent: React.FC<TestComponentProps> = ({
  text,
}) => {
  return <div>{text}</div>;
};

export default TestComponent;
