//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config.js"
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
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render

    return (
      <div>
        <UU5.Bricks.Image src={"https://cdn.pixabay.com/photo/2020/12/27/12/07/sunrise-5863751_960_720.png"}
                          responsive={true} >
        </UU5.Bricks.Image>
        <UU5.Forms.Number
          label="Number of clouds"
          size="s"
          min={0}
          max={100}
          step={1}
        />
      </div>
    );
    //@@viewOff:render
  },
});

export default QuestionImage;
