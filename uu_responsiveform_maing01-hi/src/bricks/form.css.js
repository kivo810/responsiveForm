import Config from "./config/config";

const left = () => Config.Css.css`
  width: 50%;
  float: left;
`;

const right = () => Config.Css.css`
  width: 50%;
  float: left;
`;

export default {
  left,
  right
};

