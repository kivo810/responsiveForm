//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLsiValues } from "uu5g04-hooks";
import Config from "../config/config.js";
import Lsi from "../form-components-lsi";
//@@viewOff:imports

const QuestionTable = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "QuestionTable",
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
        <UU5.Bricks.Table bordered={true} responsive={true} hover={true} striped={true}>
          <UU5.Bricks.Table.THead>
            <UU5.Bricks.Table.Tr>
              <UU5.Bricks.Table.Th content={inputLsi.hobbitTrilogy} colSpan={5} />
            </UU5.Bricks.Table.Tr>
          </UU5.Bricks.Table.THead>
          <UU5.Bricks.Table.TBody>
            <UU5.Bricks.Table.Tr>
              <UU5.Bricks.Table.Td content='1.' />
              <UU5.Bricks.Table.Td content='The Hobbit: An Unexpected Journey' />
              <UU5.Bricks.Table.Td content='14 December 2012' />
              <UU5.Bricks.Table.Td content='Peter Jackson' />
              <UU5.Bricks.Table.Td content='169 min' />
            </UU5.Bricks.Table.Tr>
            <UU5.Bricks.Table.Tr>
              <UU5.Bricks.Table.Td content='2.' />
              <UU5.Bricks.Table.Td content='The Hobbit: The Desolation of Smaug' />
              <UU5.Bricks.Table.Td content='13 December 2013' />
              <UU5.Bricks.Table.Td content='Peter Jackson' />
              <UU5.Bricks.Table.Td content='161 min' />
            </UU5.Bricks.Table.Tr>
            <UU5.Bricks.Table.Tr>
              <UU5.Bricks.Table.Td content='3.' />
              <UU5.Bricks.Table.Td content='The Hobbit: The Battle of the Five Armies' />
              <UU5.Bricks.Table.Td content='17 December 2014' />
              <UU5.Bricks.Table.Td content='Peter Jackson' />
              <UU5.Bricks.Table.Td content='144 min' />
            </UU5.Bricks.Table.Tr>
          </UU5.Bricks.Table.TBody>
        </UU5.Bricks.Table>
        <UU5.Forms.Text
          label={inputLsi.tableQuestion}
          placeholder="120"
          size="m"
        />
      </UU5.Bricks.Div>
    );
    //@@viewOff:render
  },
});

export default QuestionTable;
