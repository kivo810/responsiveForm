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
      <div align="center">
        <UU5.Forms.Radios
          label={<UU5.Bricks.Lsi lsi={{ en: "What element is second in navigation menu?" , sk: "Aky prvok je druhy v navigacnom menu?"}} />}
          size="m"
          inputWidth="150px"
          value={[
            {label: 'Logout', name: 'logout'},
            {label: 'Home', name: 'home'},
            {label: 'MyProfile', name: 'myprofile'},
            {label: 'News', name: 'news'}
          ]}
        />
      </div>
    );
    //@@viewOff:render
  },
});

export default QuestionNavbar;
