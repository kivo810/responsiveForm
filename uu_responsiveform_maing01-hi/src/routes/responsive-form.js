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
          <UU5.Bricks.Div>
            <UU5.Bricks.Image src={"https://images.pexels.com/photos/194094/pexels-photo-194094.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=1080&w=1920"}
                              responsive={true} >
            </UU5.Bricks.Image>
            <UU5.Forms.Number
              label={inputLsi.boatsQuestion}
              size="m"
              min={0}
              max={100}
              step={1}
            />
          </UU5.Bricks.Div>
          {/*<QuestionImage />*/}
          <UU5.Bricks.Div align="center">
            <UU5.Forms.Radios label={inputLsi.colorQuestion}
                              size="m"
                              inputWidth="150px"
                              value={[
                                {label: 'Brown', name: 'brown'},
                                {label: 'Black', name: 'black'},
                                {label: 'Orange', name: 'orange'},
                                {label: 'Magenta', name: 'magenta'},
                                {label: 'White', name: 'white'}
                              ]}>
            </UU5.Forms.Radios>
          </UU5.Bricks.Div>
          {/*<QuestionColor />*/}
          <div>
            <UU5.Forms.DatePicker label={inputLsi.datePicker}
                                  valueType="iso"
                                  placeholder={UU5.Common.Tools.getDateString("1990-11-21", { country: "sk-sk" })}
                                  size="m" />
          </div>
          {/*<QuestionDate />*/}
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
          {/*<QuestionVideo />*/}
          <div>
            <UU5.Forms.Slider label={inputLsi.rangeQuestion}
                              value={20}
                              size="m"
                              min={0}
                              max={150}
                              step={1}
                              disabled
            />
          </div>
          {/*<QuestionRange />*/}
          <div>
            <UU5.Forms.TimePicker
              label={inputLsi.timeQuestion}
              size="m"
              placeholder={"10:00"}
            />
          </div>
          {/*<QuestionTime />*/}
          <div>
            <UU5.Forms.ColorPicker
              label={inputLsi.colorPicker}
              size={"m"}
            />
          </div>
          {/*<QuestionColorPicker />*/}
          <div>
            <UU5.Forms.Text
              label={inputLsi.fillTextQuestion}
              placeholder={"uu5uafuu5"}
              size="m"
            />
          </div>
          {/*<QuestionFillText />*/}

          <UU5.Bricks.Button>
            {inputLsi.expandButton}
          </UU5.Bricks.Button>

          <div align="center">
            <UU5.Forms.Radios
              label={inputLsi.navbarQuestion}
              size="m"
              inputWidth="150px"
              value={[
                {label: 'Logout', name: 'logout'},
                {label: 'Home', name: 'home'},
                {label: 'MyProfile', name: 'myprofile'},
                {label: 'News', name: 'news'}
              ]}
            />
          </div>
          {/*<QuestionNavbar />*/}
          <div align="center">
            <UU5.Bricks.YoutubeVideo src={"https://www.youtube.com/watch?v=IKs1LBv5aPk"}
                                     size={"m"}
                                     muted={true}
            />
            <UU5.Forms.Text
              label={inputLsi.ytbQuestion}
              placeholder={"Ladislav"}
              size="m"
            />
          </div>
          {/*<QuestionYtb />*/}
          <div>
            <UU5.Forms.Number
              label={inputLsi.pageQuestion}
              size="m"
              min={1}
              max={12}
              step={1}
            />
          </div>
          {/*<QuestionPagination />*/}
          <div>
            <UU5.Bricks.Section content={inputLsi.movieHeader}/>
            <UU5.Bricks.Ol>
              <UU5.Bricks.Li content="Godfather (1972)"/>
              <UU5.Bricks.Li content="Fight club (1999)"/>
              <UU5.Bricks.Li content="Shawshank redemption (1994)"/>
              <UU5.Bricks.Li content="Dark knight (2008)"/>
              <UU5.Bricks.Li content="12 Angry Men (1957)"/>
            </UU5.Bricks.Ol>

            <UU5.Forms.Select
              label={inputLsi.orlQuestion}
              size="m"
            >
              <UU5.Forms.Select.Option value="1"/>
              <UU5.Forms.Select.Option value="2"/>
              <UU5.Forms.Select.Option value="3"/>
              <UU5.Forms.Select.Option value="4"/>
              <UU5.Forms.Select.Option value="5"/>
            </UU5.Forms.Select>
          </div>
          {/*<QuestionOrl />*/}
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
          {/*<QuestionCode />*/}
          <div>
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
          </div>
          {/*<QuestionTable />*/}
          <div>
            <UU5.Forms.Select
              label={inputLsi.flavor}
            >
              <UU5.Forms.Select.Option value="Apple"/>
              <UU5.Forms.Select.Option value="Vanilla"/>
              <UU5.Forms.Select.Option value="Orange"/>
              <UU5.Forms.Select.Option value="Raspberry"/>
              <UU5.Forms.Select.Option value="Cocoa"/>
            </UU5.Forms.Select>
          </div>
          {/*<QuestionFlavor />*/}
          <div>
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
          </div>
          {/*<QuestionMap />*/}

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
