//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLsiValues } from "uu5g04-hooks";
import Config from "../config/config.js";
import Lsi from "../form-components-lsi";
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
    //@@viewOn:hooks
    const inputLsi = useLsiValues(Lsi);

    //@@viewOn:hooks
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render

    return (
      <div>
        <UU5.Forms.Number
          label={<UU5.Bricks.Lsi lsi={{ en: "What page is highlighted on the bottom of the page?" , sk: "Ake cislo strany na spodku formulara je zvyraznene?"}} />}
          size="m"
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
