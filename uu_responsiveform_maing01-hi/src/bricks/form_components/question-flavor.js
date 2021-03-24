//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLsiValues } from "uu5g04-hooks";
import Config from "../config/config.js";
import Lsi from "../form-components-lsi";
//@@viewOff:imports

const QuestionFlavor = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "QuestionFlavour",
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
        <UU5.Forms.Select
          label={inputLsi.flavor}
        >
          <UU5.Forms.Select.Option value="Apple"/>
          <UU5.Forms.Select.Option value="Vanilla"/>
          <UU5.Forms.Select.Option value="Orange"/>
          <UU5.Forms.Select.Option value="Raspberry"/>
          <UU5.Forms.Select.Option value="Cocoa"/>
        </UU5.Forms.Select>
      </UU5.Bricks.Div>
    );
    //@@viewOff:render
  },
});

export default QuestionFlavor;
