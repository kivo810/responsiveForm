//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config.js"
//@@viewOff:imports

const QuestionFlavour = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "QuestionFlavour",
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
        <UU5.Forms.Select
          label="Choose black ice cream flavor"
        >
          <UU5.Forms.Select.Option value="Vanilla"/>
          <UU5.Forms.Select.Option value="Orange"/>
          <UU5.Forms.Select.Option value="Raspberry"/>
          <UU5.Forms.Select.Option value="Cocoa"/>
        </UU5.Forms.Select>
      </div>
    );
    //@@viewOff:render
  },
});

export default QuestionFlavour;
