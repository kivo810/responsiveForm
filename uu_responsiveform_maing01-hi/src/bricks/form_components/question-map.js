//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config.js"
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
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render

    return (
      <div>
        <UU5.Bricks.GoogleMap
          mapType="roadmap"
          latitude={50.0755381}
          longitude={14.43780049999998}
          googleApiKey="AIzaSyBkv-K9tpS-MrvvRKOpIGEj7H5wwdHD9pA"
          markers={[
            {
              latitude: 50.0755381,
              longitude: 14.43780049999998,
              label: "Prague",
              title: "Capital city",
              icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            },
            {
              latitude: 50.0754616,
              longitude: 14.43686409999998,
              animation: 'drop',
              onClick: (map, marker, event) => console.log(map, marker, event)
            }
          ]}
        />

        <UU5.Forms.Select
          label="Which city is it?"
        >
          <UU5.Forms.Select.Option value="Bardejov"/>
          <UU5.Forms.Select.Option value="Puchov"/>
          <UU5.Forms.Select.Option value="Nove Zamky"/>
          <UU5.Forms.Select.Option value="Lozorno"/>
        </UU5.Forms.Select>
      </div>
    );
    //@@viewOff:render
  },
});

export default QuestionMap;
