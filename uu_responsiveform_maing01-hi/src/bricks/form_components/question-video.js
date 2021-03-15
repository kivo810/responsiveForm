//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config.js"
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
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render

    return (
      <div>
        <UU5.Bricks.Video src={"https://player.vimeo.com/external/363014752.sd.mp4?s=8d89ca7f3395ce76751b346160ff2c84125e5315&profile_id=139&oauth2_token_id=57447761"}
                          autoPlay={true}
                          disableControls={false}>
        </UU5.Bricks.Video>
        <UU5.Forms.Checkboxes label="What kind of pets do you like?"
                              size="s"
                              value={[
                                {label: 'Dogs', name: 'dogs', value: true},
                                {label: 'Cats', name: 'cats'},
                                {label: 'Yaks', name: 'yaks'}
                              ]}/>
      </div>
    );
    //@@viewOff:render
  },
});

export default QuestionVideo;
