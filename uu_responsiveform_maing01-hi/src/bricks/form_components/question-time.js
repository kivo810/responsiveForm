//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config.js"
//@@viewOff:imports

const QuestionTime = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "QuestionTime",
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
        <UU5.Forms.TimePicker
          label="Pick time between 17:20 - 17:35"
          size="m"
          placeholder={"10:00"}
          />
      </div>
    );
    //@@viewOff:render
  },
});

export default QuestionTime;
