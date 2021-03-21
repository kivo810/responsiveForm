//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLsiValues } from "uu5g04-hooks";
import Config from "../config/config.js"
import Css from "../formcomponents.css.js";
import Lsi from "../form-components-lsi";
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
    //@@viewOn:hooks
    const inputLsi = useLsiValues(Lsi);

    //@@viewOn:hooks
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render

    return (
      <div>
        <UU5.Bricks.Section content={inputLsi.movieHeader}/>
        <UU5.Bricks.Ol className={Css.ol()}>
          <UU5.Bricks.Li content="Godfather (1972)"/>
          <UU5.Bricks.Li content="Fight club (1999)"/>
          <UU5.Bricks.Li content="Shawshank redemption (1994)"/>
          <UU5.Bricks.Li content="Dark knight (2008)"/>
          <UU5.Bricks.Li content="12 Angry Men (1957)"/>
        </UU5.Bricks.Ol>

        <UU5.Forms.Select
          label={inputLsi.orlQuestion}
          size="m"
        >
          <UU5.Forms.Select.Option value="1"/>
          <UU5.Forms.Select.Option value="2"/>
          <UU5.Forms.Select.Option value="3"/>
          <UU5.Forms.Select.Option value="4"/>
          <UU5.Forms.Select.Option value="5"/>
        </UU5.Forms.Select>
      </div>
    );
    //@@viewOff:render
  },
});

export default QuestionOrl;
