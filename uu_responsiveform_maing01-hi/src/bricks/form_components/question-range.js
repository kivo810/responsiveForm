//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLsiValues } from "uu5g04-hooks";
import Config from "../config/config.js";
import Lsi from "../form-components-lsi";
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
    //@@viewOn:hooks
    const inputLsi = useLsiValues(Lsi);

    //@@viewOn:hooks
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render

    return (
      <UU5.Bricks.Div>
        <UU5.Forms.Slider label={inputLsi.rangeQuestion}
                          value={20}
                          size="m"
                          min={0}
                          max={150}
                          step={1}
                          disabled
        />
      </UU5.Bricks.Div>
    );
    //@@viewOff:render
  }
});

export default QuestionRange;
