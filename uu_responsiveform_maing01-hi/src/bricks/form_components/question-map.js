//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLsiValues } from "uu5g04-hooks";
import Config from "../config/config.js";
import Lsi from "../form-components-lsi";
//@@viewOff:imports

const QuestionMap = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "QuestionMap",
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
      <UU5.Bricks.Div>
        <UU5.Bricks.GoogleMap
          mapType="roadmap"
          latitude={49.2542036}
          longitude={19.035632}
          googleApiKey="AIzaSyBkv-K9tpS-MrvvRKOpIGEj7H5wwdHD9pA"
        />

        <UU5.Forms.Select
          label={inputLsi.mapQuestion}
        >
          <UU5.Forms.Select.Option value="Rajec"/>
          <UU5.Forms.Select.Option value="Certovica"/>
          <UU5.Forms.Select.Option value="Terchova"/>
          <UU5.Forms.Select.Option value="Zazriva"/>
          <UU5.Forms.Select.Option value="Namestovo"/>
        </UU5.Forms.Select>
      </UU5.Bricks.Div>
    );
    //@@viewOff:render
  },
});

export default QuestionMap;
