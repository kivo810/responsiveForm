//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLsiValues } from "uu5g04-hooks";
import Config from "../config/config.js";
import Lsi from "../form-components-lsi";
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
    //@@viewOn:hooks
    const inputLsi = useLsiValues(Lsi);

    //@@viewOn:hooks
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render

    return (
      <div align="center">
        <UU5.Forms.Radios
          label={inputLsi.navbarQuestion}
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
