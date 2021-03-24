//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLsiValues } from "uu5g04-hooks";
import Config from "../config/config.js";
import Lsi from "../form-components-lsi";
//@@viewOff:imports

const QuestionDate = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "QuestionDate",
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
      <UU5.Bricks.Div>
        <UU5.Forms.DatePicker label={inputLsi.datePicker}
                              valueType="iso"
                              placeholder={UU5.Common.Tools.getDateString("1990-11-21", { country: "sk-sk" })}
                              size="m" />
      </UU5.Bricks.Div>
    );
    //@@viewOff:render
  }
});

export default QuestionDate;
