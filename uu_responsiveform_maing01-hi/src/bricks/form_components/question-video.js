//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLsiValues } from "uu5g04-hooks";
import Config from "../config/config.js";
import Lsi from "../form-components-lsi";
//@@viewOff:imports

const QuestionVideo = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "QuestionVideo",
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
        <UU5.Bricks.Video src={"https://player.vimeo.com/external/242215707.hd.mp4?s=78dc8d65b39fc899a51d726bc533475a29941e90&profile_id=174"}
                          autoPlay={true}
                          disableControls={false}>
        </UU5.Bricks.Video>
        <UU5.Forms.Checkboxes label={inputLsi.videoQuestion}
                              size="m"
                              inputWidth="200px"
                              value={[
                                {label: 'Dogs', name: 'dogs'},
                                {label: 'Cats', name: 'cats'},
                                {label: 'Yaks', name: 'yaks'},
                                {label: 'Value4', name: 'value4'},
                                {label: 'Value5', name: 'value5'},
                                {label: 'Value6', name: 'value6'}
                              ]}/>
      </div>
    );
    //@@viewOff:render
  },
});

export default QuestionVideo;
