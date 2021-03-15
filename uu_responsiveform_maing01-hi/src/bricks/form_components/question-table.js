//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config.js"
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
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render

    return (
      <div>
        <UU5.Bricks.Table header='Table for form' bordered={true} responsive={true} hover={true} striped={true}>
          <UU5.Bricks.Table.THead>
            <UU5.Bricks.Table.Tr>
              <UU5.Bricks.Table.Th content='Name' />
              <UU5.Bricks.Table.Th content='Rank' />
              <UU5.Bricks.Table.Th content='Promotion prospects' />
            </UU5.Bricks.Table.Tr>
          </UU5.Bricks.Table.THead>
          <UU5.Bricks.Table.TBody>
            <UU5.Bricks.Table.Tr>
              <UU5.Bricks.Table.Td content='Rimmer' />
              <UU5.Bricks.Table.Td content='2nd class technician' />
              <UU5.Bricks.Table.Td content='comical' />
            </UU5.Bricks.Table.Tr>
            <UU5.Bricks.Table.Tr>
              <UU5.Bricks.Table.Td content='Dave Lister' />
              <UU5.Bricks.Table.Td content='3rd class technician' />
              <UU5.Bricks.Table.Td content='zero' />
            </UU5.Bricks.Table.Tr>
            <UU5.Bricks.Table.Tr>
              <UU5.Bricks.Table.Td content='Kristine Kochanski' />
              <UU5.Bricks.Table.Td content='1st console officer' />
              <UU5.Bricks.Table.Td content='high' />
            </UU5.Bricks.Table.Tr>
          </UU5.Bricks.Table.TBody>
        </UU5.Bricks.Table>
      </div>
    );
    //@@viewOff:render
  },
});

export default QuestionTable;
