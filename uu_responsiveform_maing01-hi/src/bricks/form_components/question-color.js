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
      <div align="center">
        <UU5.Forms.Radios label={<UU5.Bricks.Lsi lsi={{ en: "What color is created by mixing red and blue?" , sk: "Aka farba vznikne zmixovanim cervenej a modrej?"}} />}
                          size="m"
                          inputWidth="150px"
                          value={[
                            {label: 'Brown', name: 'brown'},
                            {label: 'Black', name: 'black'},
                            {label: 'Orange', name: 'orange'},
                            {label: 'Magenta', name: 'magenta'},
                            {label: 'White', name: 'white'}
                          ]}>
        </UU5.Forms.Radios>
      </div>
    );
    //@@viewOff:render
  },
});

export default QuestionColor;
