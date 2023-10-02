import { useRef } from "react";

export const TestPromise = () => {
  const promise = useRef<Promise<number> | null>(null);
  const create = () => {
    promise.current = new Promise((res) => {
      setTimeout(() => {
        res(1);
      }, 1000);
    });
  };
  const usepromise = () => {
    const doit = async () => {
      const response = await promise.current;
      console.log("doit", response);
    };
    doit();
  };
  return (
    <div>
      <h3>Promise</h3>
      <button onClick={create}>Create Promise</button>
      <button onClick={usepromise}>Use Promise</button>
    </div>
  );
};
