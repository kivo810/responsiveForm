//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config.js"
//@@viewOff:imports

const QuestionOrl = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "QuestionOrl",
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
        <UU5.Bricks.Section content="Which of these movies is oldest?"/>
        <UU5.Bricks.Ol>
          <UU5.Bricks.Li content="God father"/>
          <UU5.Bricks.Li content="Fight club"/>
          <UU5.Bricks.Li content="Shawshank redemption"/>
          <UU5.Bricks.Li content="Dark knight"/>
          <UU5.Bricks.Li content="Pulp fiction"/>
        </UU5.Bricks.Ol>

        //TODO - question - pick form brick

      </div>
    );
    //@@viewOff:render
  },
});

export default QuestionOrl;
