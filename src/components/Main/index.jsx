import "./styles.css";

import { FieldSet } from "../Fieldset";
import { Background } from "../Background";

export const Main = () => {
  return (
    <div className="main-container">
      <Background />
      <FieldSet />
    </div>
  );
};
