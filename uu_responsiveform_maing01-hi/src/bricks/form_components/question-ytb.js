//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLsiValues } from "uu5g04-hooks";
import Config from "../config/config.js";
import Lsi from "../form-components-lsi";
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
    //@@viewOn:hooks
    const inputLsi = useLsiValues(Lsi);

    //@@viewOn:hooks
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render

    return (
      <div align="center">
        <UU5.Bricks.YoutubeVideo src={"https://www.youtube.com/watch?v=IKs1LBv5aPk"}
                                 size={"m"}
                                 muted={true}
        />
        <UU5.Forms.Text
                        label={<UU5.Bricks.Lsi lsi={{ en: "What is the name of third prisoner? (Can be found on 1:40)" , sk: "Ake je meno tretieho väzňa? (Najdes na 1:40)"}} />}
                        placeholder={"Ladislav"}
                        size="m"
        />
      </div>
    );
    //@@viewOff:render
  },
});

export default QuestionYtb;
