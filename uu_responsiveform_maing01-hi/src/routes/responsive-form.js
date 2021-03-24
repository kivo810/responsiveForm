//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent, useLsiValues } from "uu5g04-hooks";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-bricks";
import Lsi from "./responsive-form-lsi";

import Config from "./config/config.js";
import Css from "../bricks/form.css.js"
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Home",
  //@@viewOff:statics
};


function validateForm(opt) {
  // let correctAnswers = 0;
  // let incorrectAnswers = 0;
  // let wrongAnswers = [];
  // let d = new Date();
  // let duration = (d.getTime() - timer.getTime()) / 1000;
  const {correctAnswers, incorrectAnswers, wrongAnswers} = validateFormComponents(opt);
  // alert("Form done in " + duration + "s");
  alert("Correct answers: " + correctAnswers);
  alert("Wrong answers: " + incorrectAnswers);
  alert("Wrong answers: " + wrongAnswers);
  alert(JSON.stringify(opt.component.getValues(), null, 1))
  window.location.reload();
}

function validateFormComponents(opt){
  let correctAnswers = 0;
  let incorrectAnswers = 0;
  let wrongAnswers = [];

  if (validateImage(opt.component.getValues().imgNumber)){
    correctAnswers++;
  } else {
    incorrectAnswers++;
    wrongAnswers.push("1");
  }

  if (validateColor(opt.component.getValues().colorMix)){
    correctAnswers++;
  } else {
    incorrectAnswers++;
    wrongAnswers.push("2");
  }

  if (validateDate(opt.component.getValues().todaysDate)) {
    correctAnswers++;
  } else {
    incorrectAnswers++;
    wrongAnswers.push("3");
  }

  if (validateVideo(opt.component.getValues().videoAnswer)){
    correctAnswers++;
  } else {
    incorrectAnswers++;
    wrongAnswers.push("4");
  }

  if (validateRange(opt.component.getValues().rangeAnswers)){
    correctAnswers++;
  } else {
    incorrectAnswers++;
    wrongAnswers.push("5");
  }

  if (validateTime(opt.component.getValues().timeAnswer)) {
    correctAnswers++;
  } else {
    incorrectAnswers++;
    wrongAnswers.push("6")
  }

  if (validateBrightestColor(opt.component.getValues().colorPickAnswer)){
    correctAnswers++;
  } else {
    incorrectAnswers++;
    wrongAnswers.push("7")
  }

  if (validatePlaceholder(opt.component.getValues().placeholderAnswer)) {
    correctAnswers++;
  } else {
    incorrectAnswers++;
    wrongAnswers.push("8");
  }

  if (validateNavbar(opt.component.getValues().navbarAnswer)){
    correctAnswers++;
  } else {
    incorrectAnswers++;
    wrongAnswers.push("9");
  }

  if (validateYtb(opt.component.getValues().ytbAnswer)){
    correctAnswers++;
  } else {
    incorrectAnswers++;
    wrongAnswers.push("10");
  }

  if (validatePageNumber(opt.component.getValues().pageAnswer)){
    correctAnswers++;
  } else {
    incorrectAnswers++;
    wrongAnswers.push("11");
  }

  if (validateOl(opt.component.getValues().orlAnswer)){
    correctAnswers++;
  } else {
    incorrectAnswers++;
    wrongAnswers.push("12");
  }

  if (validateCode(opt.component.getValues().codeAnswer)){
    correctAnswers++;
  } else {
    incorrectAnswers++;
    wrongAnswers.push("13");
  }

  if (validateTable(opt.component.getValues().tableAnswer)){
    correctAnswers++;
  } else {
    incorrectAnswers++;
    wrongAnswers.push("14");
  }

  if (validateIceCream(opt.component.getValues().flavorSelect)){
    correctAnswers++;
  } else {
    incorrectAnswers++;
    wrongAnswers.push("15");
  }

  if (validateMap(opt.component.getValues().mapAnswer)){
    correctAnswers++;
  } else {
    incorrectAnswers++;
    wrongAnswers.push("16");
  }
  // validateMap() ? correctAnswers++ : incorrectAnswers++;
  return { correctAnswers: correctAnswers, incorrectAnswers: incorrectAnswers, wrongAnswers: wrongAnswers};
}

function validateImage(value) {
  //TODO
  return value === "8";
}

function validateColor(colorMix) {
  return colorMix === "magenta";
}

function formatDate(date) {
  let d = new Date(date),
  month = '' + (d.getMonth() + 1),
  day = '' + d.getDate(),
  year = d.getFullYear();

  if (month.length < 2)
  month = '0' + month;
  if (day.length < 2)
  day = '0' + day;

  return [year, month, day].join('-');
}

function validateDate(todaysDate) {
  //TODO
  let todayDate = formatDate(new Date());
  return todayDate === todaysDate;
}

function validateVideo(videoAnswer) {
  //TODO
  // alert(videoAnswer.dogs);
  return false;
}

function validateRange(rangeAnswers) {
  return parseInt(rangeAnswers) > 120;
}

function validateTime(timeAnswer) {
  // alert(timeAnswer);
  let time = timeAnswer.split(":");
  return parseInt(time[0]) === 7 && parseInt(time[1]) > 9 && parseInt(time[1]) < 26;
}

function validateBrightestColor(colorPickAnswer) {
  return colorPickAnswer === "#000000";
}

function validatePlaceholder(placeholderAnswer) {
  return placeholderAnswer === "uu5uafuu5";
}

function validateNavbar(navbarAnswer) {
  return navbarAnswer === "myprofile";
}

function validateYtb(ytbAnswer) {
  return ytbAnswer.toLowerCase() === "vladimir";
}

function validatePageNumber(pageAnswer) {
  return parseInt(pageAnswer) === 9;
}

function validateOl(orlAnswer) {
  return orlAnswer === "5";
}

function validateCode(codeAnswer) {
  return codeAnswer.toLowerCase() === "tincidunt";
}

function validateTable(tableAnswer) {
  return tableAnswer === "144";
}

function validateIceCream(flavorSelect) {
  return flavorSelect === "Cocoa";
}

function validateMap(mapAnswer) {
  return mapAnswer === "Terchova";
}

export const ResponsiveForm = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    // onSave: UU5.PropTypes.func,
    // onCancel: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    // onSave: () => {},
    // onCancel: () => {}
  },
  //@@viewOff:defaultProps

  render(onSave, onCancel) {
    //@@viewOn:hooks
    const inputLsi = useLsiValues(Lsi);

    //@@viewOn:hooks

    //@@viewOn:private


    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <>
        <UU5.Forms.Form
          // onSave={(opt) => alert(`opt.values:\n${JSON.stringify(opt.values, null, 2)}`)}
          onSave={(opt) => validateForm(opt)}
          // header={<UU5.Bricks.Box content='Registration form' colorSchema='green' className='font-size-m' />}
          // footer={<UU5.Bricks.Box content='Unicorn 2018' colorSchema='grey' className='font-size-xs' />}
        >

          <UU5.Bricks.NavBar colorSchema="primary">
            <UU5.Bricks.NavBar.Header content="Menu" />
            <UU5.Bricks.NavBar.Nav>
              <UU5.Bricks.NavBar.Nav.Item><UU5.Bricks.Icon icon="mdi-home" />{inputLsi.home}</UU5.Bricks.NavBar.Nav.Item>
              <UU5.Bricks.NavBar.Nav.Item>
                <UU5.Bricks.Icon icon="mdi-newspaper" />news
              </UU5.Bricks.NavBar.Nav.Item>
              <UU5.Bricks.NavBar.Nav.Item>
                <UU5.Bricks.Icon icon="mdi-account" />myProfile
              </UU5.Bricks.NavBar.Nav.Item>
              <UU5.Bricks.NavBar.Nav.Item>
                <UU5.Bricks.Icon icon="mdi-logout" style={{ color: "red" }} />logOut
              </UU5.Bricks.NavBar.Nav.Item>
            </UU5.Bricks.NavBar.Nav>
          </UU5.Bricks.NavBar>

          <UU5.Bricks.Div>
          <UU5.Bricks.Image src={"https://images.pexels.com/photos/194094/pexels-photo-194094.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=1080&w=1920"}
                            responsive={true} >
          </UU5.Bricks.Image>
          <UU5.Forms.Number
            label={"Pocet lodi"}
            name={"imgNumber"}
            size="m"
            min={0}
            max={100}
            step={1}
          />
        </UU5.Bricks.Div>

        <UU5.Bricks.Div align="center">
          <UU5.Forms.Radios label={"Color question"}
                            name={"colorMix"}
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

        <UU5.Bricks.Div>
          <UU5.Forms.DatePicker label={"Vyber dnešný dátum"}
                                name={"todaysDate"}
                                valueType="iso"
                                placeholder={UU5.Common.Tools.getDateString("1990-11-21", { country: "sk-sk" })}
                                size="m" />
        </UU5.Bricks.Div>

        <UU5.Bricks.Div align="center">
          <UU5.Bricks.Video src={"https://player.vimeo.com/external/242215707.hd.mp4?s=78dc8d65b39fc899a51d726bc533475a29941e90&profile_id=174"}
                            autoPlay={true}
                            disableControls={false}>
          </UU5.Bricks.Video>
          <UU5.Forms.Checkboxes label={"Video otázka"}
                                name={"videoAnswer"}
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
        </UU5.Bricks.Div>

        <UU5.Bricks.Div>
          <UU5.Forms.Slider label={"Range question"}
                            name={"rangeAnswer"}
                            value={20}
                            size="m"
                            min={0}
                            max={150}
                            step={1}
                            disabled
          />
        </UU5.Bricks.Div>

        <UU5.Bricks.Div>
          <UU5.Forms.TimePicker
            label={"timeQuestion"}
            name={"timeAnswer"}
            size="m"
            placeholder={"10:00"}
          />
        </UU5.Bricks.Div>

        <UU5.Bricks.Div>
          <UU5.Forms.ColorPicker
            label={"colorPicker"}
            name={"colorPickAnswer"}
            size={"m"}
          />
        </UU5.Bricks.Div>

        <UU5.Bricks.Div>
          <UU5.Forms.Text
            label={"fillTextQuestion"}
            name={"placeholderAnswer"}
            placeholder={"uu5uafuu5"}
            size="m"
          />
        </UU5.Bricks.Div>

        <UU5.Bricks.Button>Expand button</UU5.Bricks.Button>

        <UU5.Bricks.Div align="center">
          <UU5.Forms.Radios
            label={"navbarQuestion"}
            name={"navbarAnswer"}
            size="m"
            inputWidth="150px"
            value={[
              {label: 'Logout', name: 'logout'},
              {label: 'Home', name: 'home'},
              {label: 'MyProfile', name: 'myprofile'},
              {label: 'News', name: 'news'}
            ]}
          />
        </UU5.Bricks.Div>

        <UU5.Bricks.Div align="center">
          <UU5.Bricks.YoutubeVideo src={"https://www.youtube.com/watch?v=IKs1LBv5aPk"}
                                   size={"m"}
                                   muted={true}
          />
          <UU5.Forms.Text
            label={"ytbQuestion"}
            name={"ytbAnswer"}
            placeholder={"Ladislav"}
            size="m"
          />
        </UU5.Bricks.Div>

        <UU5.Bricks.Div>
          <UU5.Forms.Number
            label={"pageQuestion"}
            name={"pageAnswer"}
            size="m"
            min={1}
            max={12}
            step={1}
          />
        </UU5.Bricks.Div>

        <UU5.Bricks.Div>
          <UU5.Bricks.Section content={"movieHeader"}/>
          <UU5.Bricks.Ol>
            <UU5.Bricks.Li content="Godfather (1972)"/>
            <UU5.Bricks.Li content="Fight club (1999)"/>
            <UU5.Bricks.Li content="Shawshank redemption (1994)"/>
            <UU5.Bricks.Li content="Dark knight (2008)"/>
            <UU5.Bricks.Li content="12 Angry Men (1957)"/>
          </UU5.Bricks.Ol>

          <UU5.Forms.Select
            label={"orlQuestion"}
            name={"orlAnswer"}
            size="m"
          >
            <UU5.Forms.Select.Option value="1"/>
            <UU5.Forms.Select.Option value="2"/>
            <UU5.Forms.Select.Option value="3"/>
            <UU5.Forms.Select.Option value="4"/>
            <UU5.Forms.Select.Option value="5"/>
          </UU5.Forms.Select>
        </UU5.Bricks.Div>

        <UU5.Bricks.Div>
          <UU5.Bricks.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur in coded message enim nec cursus. Maecenas eu est commodo, aliquam odio non, porttitor nisi. Nulla iaculis lorem ac rutrum malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ipsum risus, tincidunt quis tempus sit amet, congue quis purus. Proin aliquam ex vitae augue fermentum, a ornare velit sodales. Donec fringilla mattis magna, a tempor augue gravida vel.
            Curabitur varius aliquet ipsum sit amet accumsan. Sed nec elit lacinia, tempus diam vel, molestie erat. Ut ultrices semper magna, nec feugiat diam <b>tincidunt</b> non. Nunc ac orci turpis. Aenean finibus aliquet turpis quis porttitor. Maecenas tincidunt maximus massa non ornare. Nulla ornare posuere condimentum. Nullam dapibus, quam ac porta pulvinar, mi magna euismod urna, ut sodales neque orci eget mauris. Vivamus nec laoreet leo. Etiam vitae est sem. Duis commodo elit in orci varius semper. Aenean non massa at ipsum ultrices efficitur bibendum sed tortor. Ut volutpat ex augue, a auctor ipsum sagittis varius. Suspendisse tincidunt ultrices urna at aliquam.
          </UU5.Bricks.Text>
          <UU5.Forms.Text
            label={"codeQuestion"}
            name={"codeAnswer"}
            placeholder="word"
            size="m"
          />
        </UU5.Bricks.Div>

        <UU5.Bricks.Div>
          <UU5.Bricks.Table bordered={true} responsive={true} hover={true} striped={true}>
            <UU5.Bricks.Table.THead>
              <UU5.Bricks.Table.Tr>
                <UU5.Bricks.Table.Th content={"hobbitTrilogy"} colSpan={5} />
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
            label={"tableQuestion"}
            name={"tableAnswer"}
            placeholder="120"
            size="m"
          />
        </UU5.Bricks.Div>

        <UU5.Bricks.Div>
          <UU5.Forms.Select
            label={"flavor"}
            name={"flavorSelect"}
          >
            <UU5.Forms.Select.Option value="Apple"/>
            <UU5.Forms.Select.Option value="Vanilla"/>
            <UU5.Forms.Select.Option value="Orange"/>
            <UU5.Forms.Select.Option value="Raspberry"/>
            <UU5.Forms.Select.Option value="Cocoa"/>
          </UU5.Forms.Select>
        </UU5.Bricks.Div>

        <UU5.Bricks.Div>
          <UU5.Bricks.GoogleMap
            mapType="roadmap"
            latitude={49.2542036}
            longitude={19.035632}
            googleApiKey="AIzaSyBkv-K9tpS-MrvvRKOpIGEj7H5wwdHD9pA"
          />

          <UU5.Forms.Select
            label={"mapQuestion"}
            name={"mapAnswer"}
          >
            <UU5.Forms.Select.Option value="Rajec"/>
            <UU5.Forms.Select.Option value="Certovica"/>
            <UU5.Forms.Select.Option value="Terchova"/>
            <UU5.Forms.Select.Option value="Zazriva"/>
            <UU5.Forms.Select.Option value="Namestovo"/>
          </UU5.Forms.Select>
        </UU5.Bricks.Div>

          <UU5.Forms.Controls />
        </UU5.Forms.Form>
      </>
    );
    //@@viewOff:render
  }
});

export default ResponsiveForm;
