//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config.js"
//@@viewOff:imports

const QuestionRange = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "QuestionRange",
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
        <UU5.Forms.Slider label="Choose volume more than 100"
                          value={20}
                          size="s"
                          min={0}
                          max={150}
                          step={1}
        />
      </div>
    );
    //@@viewOff:render
  },
});

export default QuestionRange;
