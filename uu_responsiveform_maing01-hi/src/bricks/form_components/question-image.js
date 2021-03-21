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
        <UU5.Bricks.Image src={"https://images.pexels.com/photos/194094/pexels-photo-194094.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=1080&w=1920"}
                          responsive={true} >
        </UU5.Bricks.Image>
        <UU5.Forms.Number
          label="Number of boats"
          size="m"
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
