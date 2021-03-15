//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config.js"
//@@viewOff:imports

const QuestionNavbar = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "QuestionNavbar",
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
        <UU5.Forms.Radios
          label="What element is second in navbar?"
          size="s"
          value={[
            {label: 'Logout', name: 'logout'},
            {label: 'Home', name: 'home'},
            {label: 'News', name: 'news'}
          ]}
        />
      </div>
    );
    //@@viewOff:render
  },
});

export default QuestionNavbar;
