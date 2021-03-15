//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent } from "uu5g04-hooks";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-bricks";

import Config from "./config/config.js";
import QuestionImage from "../bricks/form_components/question-image";
import QuestionColor from "../bricks/form_components/question-color";
import QuestionDate from "../bricks/form_components/question-date";
import QuestionVideo from "../bricks/form_components/question-video";
import QuestionRange from "../bricks/form_components/question-range";
import QuestionTime from "../bricks/form_components/question-time";
import QuestionColorPicker from "../bricks/form_components/question-colorpicker";
import QuestionFillText from "../bricks/form_components/question-filltext";
import QuestionNavbar from "../bricks/form_components/question-navbar";
import QuestionYtb from "../bricks/form_components/question-ytb";
import QuestionPagination from "../bricks/form_components/question-pagination";
import QuestionOrl from "../bricks/form_components/question-orl";
import QuestionCode from "../bricks/form_components/question-code";
import QuestionTable from "../bricks/form_components/question-table";
import QuestionFlavour from "../bricks/form_components/question-flavour";
import QuestionMap from "../bricks/form_components/question-map";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Home",
  //@@viewOff:statics
};

const CLASS_NAMES = {
  welcomeRow: () => Config.Css.css`
    padding: 56px 0 20px;
    max-width: 624px;
    margin: 0 auto;
    text-align: center;

    ${UU5.Utils.ScreenSize.getMinMediaQueries("s", `text-align: left;`)}

    .uu5-bricks-header {
      margin-top: 8px;
    }

    .plus4u5-bricks-user-photo {
      margin: 0 auto;
    }
  `,
};

export const Home = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = UU5.Common.VisualComponent.getAttrs(props);
    return (
      <>
        <UU5.Bricks.NavBar colorSchema="primary">
          <UU5.Bricks.NavBar.Header content="Page" />
          <UU5.Bricks.NavBar.Nav>
            <UU5.Bricks.NavBar.Nav.Item><UU5.Bricks.Icon icon="mdi-home" />Home</UU5.Bricks.NavBar.Nav.Item>
            <UU5.Bricks.NavBar.Nav.Item>
              <UU5.Bricks.Icon icon="mdi-newspaper" />News
            </UU5.Bricks.NavBar.Nav.Item>
            <UU5.Bricks.NavBar.Nav.Item>
              <UU5.Bricks.Icon icon="mdi-account" />MyProfile
            </UU5.Bricks.NavBar.Nav.Item>
            <UU5.Bricks.NavBar.Nav.Item>
              <UU5.Bricks.Icon icon="mdi-logout" style={{ color: "red" }} />LogOut
            </UU5.Bricks.NavBar.Nav.Item>
          </UU5.Bricks.NavBar.Nav>
        </UU5.Bricks.NavBar>

        <QuestionImage />
        <QuestionColor />
        <QuestionDate />
        <QuestionVideo />
        <QuestionRange />
        <QuestionTime />
        <QuestionColorPicker />
        <QuestionFillText />

        <UU5.Bricks.Button>
          Click to expand more questions.
        </UU5.Bricks.Button>

        <QuestionNavbar />
        <QuestionYtb />
        <QuestionPagination />
        <QuestionOrl />
        <QuestionCode />
        <QuestionTable />
        <QuestionFlavour />
        <QuestionMap />


        <UU5.Bricks.Pagination
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          activeIndex={8}
          range={10}
          prevLabel="Previous"
          nextLabel="Next"
          size="m"
          onChanged={(comp, index, newActive) => console.log(comp, index, newActive)}
          background
        />
      </>
    );
    //@@viewOff:render
  },
});

export default Home;
