//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config.js"
//@@viewOff:imports

const QuestionColorPicker = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "QuestionColorPicker",
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
        <UU5.Forms.ColorPicker
          label={<UU5.Bricks.Lsi lsi={{ en: "Select darkest black color" , sk: "Zvol najtmavsiu ciernu farbu"}} />}
          size={"m"}
        />
      </div>
    );
    //@@viewOff:render
  },
});

export default QuestionColorPicker;
