//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLsiValues } from "uu5g04-hooks";
import Config from "../config/config.js";
import Lsi from "../form-components-lsi";
//@@viewOff:imports

const QuestionCode = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "QuestionCode",
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
        <UU5.Bricks.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur in coded message enim nec cursus. Maecenas eu est commodo, aliquam odio non, porttitor nisi. Nulla iaculis lorem ac rutrum malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ipsum risus, tincidunt quis tempus sit amet, congue quis purus. Proin aliquam ex vitae augue fermentum, a ornare velit sodales. Donec fringilla mattis magna, a tempor augue gravida vel.
          Curabitur varius aliquet ipsum sit amet accumsan. Sed nec elit lacinia, tempus diam vel, molestie erat. Ut ultrices semper magna, nec feugiat diam <b>tincidunt</b> non. Nunc ac orci turpis. Aenean finibus aliquet turpis quis porttitor. Maecenas tincidunt maximus massa non ornare. Nulla ornare posuere condimentum. Nullam dapibus, quam ac porta pulvinar, mi magna euismod urna, ut sodales neque orci eget mauris. Vivamus nec laoreet leo. Etiam vitae est sem. Duis commodo elit in orci varius semper. Aenean non massa at ipsum ultrices efficitur bibendum sed tortor. Ut volutpat ex augue, a auctor ipsum sagittis varius. Suspendisse tincidunt ultrices urna at aliquam.
        </UU5.Bricks.Text>
        <UU5.Forms.Text
          label={inputLsi.codeQuestion}
          placeholder="word"
          size="m"
        />
      </div>
    );
    //@@viewOff:render
  },
});

export default QuestionCode;
