//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config.js"
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
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render

    return (
      <div>
        <UU5.Forms.DatePicker label={<UU5.Bricks.Lsi lsi={{ en: "What is the date today?" , sk: "Aky je dnes datum?"}}/>}
                              valueType="iso"
                              placeholder={UU5.Common.Tools.getDateString("1990-11-21", { country: "sk-sk" })}
                              size="m" />
      </div>
    );
    //@@viewOff:render
  }
});

export default QuestionDate;
