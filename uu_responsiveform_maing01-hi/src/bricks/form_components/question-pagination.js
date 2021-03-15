//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config.js"
//@@viewOff:imports

const QuestionPagination = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "QuestionPagination",
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
        <UU5.Forms.Number
          label="What page is highlighted on the bottom of the page"
          size="s"
          min={1}
          max={12}
          step={1}
        />
      </div>
    );
    //@@viewOff:render
  },
});

export default QuestionPagination;
