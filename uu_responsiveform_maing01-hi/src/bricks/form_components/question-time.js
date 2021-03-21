//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLsiValues } from "uu5g04-hooks";
import Config from "../config/config.js";
import Lsi from "../form-components-lsi";
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
    //@@viewOn:hooks
    const inputLsi = useLsiValues(Lsi);

    //@@viewOn:hooks
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render

    return (
      <div>
        <UU5.Forms.TimePicker
          label={inputLsi.timeQuestion}
          size="m"
          placeholder={"10:00"}
          />
      </div>
    );
    //@@viewOff:render
  },
});

export default QuestionTime;
