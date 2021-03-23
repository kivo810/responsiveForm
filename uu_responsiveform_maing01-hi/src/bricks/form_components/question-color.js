//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLsiValues } from "uu5g04-hooks";
import Config from "../config/config.js";
import Lsi from "../form-components-lsi";
//@@viewOff:imports

const QuestionColor = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "QuestionColor",
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
      <UU5.Bricks.Div align="center">
        <UU5.Forms.Radios label={inputLsi.colorQuestion}
                          size="m"
                          inputWidth="150px"
                          value={[
                            {label: 'Brown', name: 'brown'},
                            {label: 'Black', name: 'black'},
                            {label: 'Orange', name: 'orange'},
                            {label: 'Magenta', name: 'magenta'},
                            {label: 'White', name: 'white'}
                          ]}>
        </UU5.Forms.Radios>
      </UU5.Bricks.Div>
    );
    //@@viewOff:render
  },
});

export default QuestionColor;
