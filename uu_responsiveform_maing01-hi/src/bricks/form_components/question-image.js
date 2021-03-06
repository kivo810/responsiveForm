//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLsiValues } from "uu5g04-hooks";
import Config from "../config/config.js";
import Lsi from "../form-components-lsi";
//@@viewOff:imports

const QuestionImage = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "QuestionImage",
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:hooks
    const inputLsi = useLsiValues(Lsi);

    //@@viewOff:hooks
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render

    return (
      <UU5.Bricks.Div>
        <UU5.Bricks.Image src={"https://images.pexels.com/photos/194094/pexels-photo-194094.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=1080&w=1920"}
                          responsive={true} >
        </UU5.Bricks.Image>
        <UU5.Forms.Number
          label={inputLsi.boatsQuestion}
          size="m"
          min={0}
          max={100}
          step={1}
        />
      </UU5.Bricks.Div>
    );
    //@@viewOff:render
  },
});

export default QuestionImage;
