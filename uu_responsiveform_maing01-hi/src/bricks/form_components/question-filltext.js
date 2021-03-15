//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config.js"
//@@viewOff:imports

const QuestionFillText = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "QuestionFillText",
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render

    return (
      <div>
        <UU5.Forms.Text
          label={"Rewrite text from the box"}
          placeholder={"678pop876"}
          size="s"
          />
      </div>
    );
    //@@viewOff:render
  },
});

export default QuestionFillText;
