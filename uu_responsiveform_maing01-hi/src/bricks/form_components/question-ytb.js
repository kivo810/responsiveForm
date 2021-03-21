//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config.js"
//@@viewOff:imports

const QuestionYtb = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "QuestionYtb",
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
      <div align="center">
        <UU5.Bricks.YoutubeVideo src={"https://www.youtube.com/watch?v=IKs1LBv5aPk"}
                                 size={"m"}
                                 muted={true}
        />
        <UU5.Forms.Text label={"What is the name of second prisoner?"}
                        placeholder={"Ladislav"}
                        size="m"
        />
      </div>
    );
    //@@viewOff:render
  },
});

export default QuestionYtb;
