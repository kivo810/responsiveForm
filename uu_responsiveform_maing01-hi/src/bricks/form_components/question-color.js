//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config.js"
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
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render

    return (
      <div>
        <UU5.Forms.Radios label={"What color will be made from yellow and blue?"}
                          size="s"
                          value={[
                            {label: 'Dogs', name: 'dogs', value: true},
                            {label: 'Cats', name: 'cats'},
                            {label: 'Yaks', name: 'yaks'}
                          ]}>
        </UU5.Forms.Radios>
      </div>
    );
    //@@viewOff:render
  },
});

export default QuestionColor;
