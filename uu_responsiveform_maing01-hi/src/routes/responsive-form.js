//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent, useLsiValues } from "uu5g04-hooks";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-bricks";
import Lsi from "./responsive-form-lsi";

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
import QuestionFlavor from "../bricks/form_components/question-flavor";
import QuestionMap from "../bricks/form_components/question-map";
import Css from "../bricks/form.css.js"
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

export const ResponsiveForm = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    onSave: UU5.PropTypes.func,
    onCancel: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSave: () => {},
    onCancel: () => {}
  },
  //@@viewOff:defaultProps

  render(onSave, onCancel) {
    //@@viewOn:hooks
    const inputLsi = useLsiValues(Lsi);

    //@@viewOn:hooks

    //@@viewOn:private
    var startTime;

    function uncoverForm(){
      let d = new Date();
      startTime = d.getTime();
      document.getElementById("responsive_form").hidden = false;
      document.getElementById("stopwatch").hidden = true;
    }

    function validateForm(){
      let d = new Date();
      let endTime = d.getTime();
      let duration = (endTime - startTime) / 1000;
      alert("Form done in: " + duration + "s");
      window.location.reload();
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <div className={Css.body()}>
        <UU5.Bricks.NavBar colorSchema="primary">
          <UU5.Bricks.NavBar.Header content="Menu" />
          <UU5.Bricks.NavBar.Nav>
            <UU5.Bricks.NavBar.Nav.Item><UU5.Bricks.Icon icon="mdi-home" />{inputLsi.home}</UU5.Bricks.NavBar.Nav.Item>
            <UU5.Bricks.NavBar.Nav.Item>
              <UU5.Bricks.Icon icon="mdi-newspaper" />{inputLsi.news}
            </UU5.Bricks.NavBar.Nav.Item>
            <UU5.Bricks.NavBar.Nav.Item>
              <UU5.Bricks.Icon icon="mdi-account" />{inputLsi.myProfile}
            </UU5.Bricks.NavBar.Nav.Item>
            <UU5.Bricks.NavBar.Nav.Item>
              <UU5.Bricks.Icon icon="mdi-logout" style={{ color: "red" }} />{inputLsi.logOut}
            </UU5.Bricks.NavBar.Nav.Item>
          </UU5.Bricks.NavBar.Nav>
        </UU5.Bricks.NavBar>

        <UU5.Bricks.Button id="stopwatch" onClick={uncoverForm} align="center">{inputLsi.startStopwatch}</UU5.Bricks.Button>

        <div id="responsive_form" hidden={true}>
          <QuestionImage />
          <QuestionColor />
          <QuestionDate />
          <QuestionVideo />
          <QuestionRange />
          <QuestionTime />
          <QuestionColorPicker />
          <QuestionFillText />

          <UU5.Bricks.Button>
            {inputLsi.expandButton}
          </UU5.Bricks.Button>

          <QuestionNavbar />
          <QuestionYtb />
          <QuestionPagination />
          <QuestionOrl />
          <QuestionCode />
          <QuestionTable />
          <QuestionFlavor />
          <QuestionMap />

          <UU5.Bricks.Button onClick={validateForm}>{inputLsi.validate}</UU5.Bricks.Button>

          {/*<UU5.Forms.ContextControls align="center"*/}
          {/*                           buttonSubmitProps={{ content: inputLsi.validate}}*/}
          {/*                           buttonCancelProps={{ content: inputLsi.cancel }}*/}
          {/*/>*/}
        </div>

        {/*<QuestionImage />*/}
        {/*<QuestionColor />*/}
        {/*<QuestionDate />*/}
        {/*<QuestionVideo />*/}
        {/*<QuestionRange />*/}
        {/*<QuestionTime />*/}
        {/*<QuestionColorPicker />*/}
        {/*<QuestionFillText />*/}

        {/*<UU5.Bricks.Button>*/}
        {/*  {inputLsi.expandButton}*/}
        {/*</UU5.Bricks.Button>*/}

        {/*<QuestionNavbar />*/}
        {/*<QuestionYtb />*/}
        {/*<QuestionPagination />*/}
        {/*<QuestionOrl />*/}
        {/*<QuestionCode />*/}
        {/*<QuestionTable />*/}
        {/*<QuestionFlavor />*/}
        {/*<QuestionMap />*/}

        {/*<UU5.Forms.ContextControls align="center"*/}
        {/*  buttonSubmitProps={{ content: inputLsi.validate}}*/}
        {/*  buttonCancelProps={{ content: inputLsi.cancel }}*/}
        {/*/>*/}


        {/*<UU5.Bricks.Pagination*/}
        {/*  items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}*/}
        {/*  activeIndex={8}*/}
        {/*  range={10}*/}
        {/*  prevLabel="Previous"*/}
        {/*  nextLabel="Next"*/}
        {/*  size="m"*/}
        {/*  onChanged={(comp, index, newActive) => console.log(comp, index, newActive)}*/}
        {/*  background*/}
        {/*/>*/}
      </div>
    );
    //@@viewOff:render
  }
});

export default ResponsiveForm;
