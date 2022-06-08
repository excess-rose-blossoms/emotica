import { Formik, Field, Form, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { addStory } from "../redux/storiesSlice";
import "../css/components/story-form.css";
import { love_letter } from "./All";
import Icon from "./Icon";
import {useState} from 'react';
import EmojiKeyboard from "./EmojiKeyboard";

function StoryForm() {
  const stories = useSelector((state) => state.stories.value);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [chosenField, setChosenField] = useState("title")
  const FIELDTITLE = "title";
  const FIELDDESCRIPTION = "description";
  const FIELDAUTHOR = "author";
  const FIELDBODY = "body";

  const field_style = {border: '2px solid black', fontSize: '1.5rem'};
  const emoji_keyboard_style = { width: '30rem', flex: '1', borderShadow: 'none', margin: '2rem', }

  const validate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = "Required!";
    }
    if (!values.description) {
      errors.description = "Required!";
    }
    if (!values.author) {
      errors.author = "Required!";
    }
    if (!values.body) {
      errors.body = "Required!";
    }
    return errors;
  };

  const addToTitle = (emoji) => {
    switch(chosenField) {
      case FIELDTITLE:
        setTitle(title+emoji);
        break;
      case FIELDDESCRIPTION:
        setDescription(description+emoji);
        break;
      case FIELDAUTHOR:
        setAuthor(author+emoji);
        break;
      case FIELDBODY:
        setBody(body+emoji);
        break;
      default:
        return;
    }
  }

  return (
    <div className="form-container">
      <Formik
        enableReinitialize
        initialValues={{
          title: "",
          description: "",
          author: "",
          body: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(addStory(values));
          actions.resetForm({
            values: {
              title: "",
              description: "",
              author: "",
              body: "",
            },
          });
        }}
        validate={validate}
      >
        <Form className="form">
          <label className="form-row" htmlFor="title">
            <span className="text">TITLE<br/><ErrorMessage className="error-message" name="title"/></span> <Field className="field" id="title" name="title" value={title} onFocus={() => setChosenField(FIELDTITLE)} style={field_style}/>
          </label>

          <label className="form-row" htmlFor="author">
            <span className="text">AUTHOR<br/><ErrorMessage className="error-message" name="author" /></span> <Field className="field" id="author" name="author" value={author} onFocus={() => setChosenField(FIELDAUTHOR)} style={field_style}/>
          </label>

          <label className="form-row" htmlFor="description">
            <span className="text">SUMMARY<br/><ErrorMessage className="error-message" name="description" /></span> <Field className="field" id="description" name="description" value={description} onFocus={() => setChosenField(FIELDDESCRIPTION)} style={field_style}/>
          </label>

          <label className="form-row-body" htmlFor="body">
            <span className="text">BODY<br/><ErrorMessage className="error-message" name="body" /></span> <Field className="field" id="body" name="body" as="textarea" value={body} onFocus={() => setChosenField(FIELDBODY)} style={field_style}/>
          </label>

          <button
            type="submit"
            className="submit-button"
            style={{
              height: "3rem",
              width: "4.4rem",
              marginLeft: "auto",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <Icon icon={love_letter} alt={"ahhh"} />
          </button>
        </Form>
      </Formik>
      <EmojiKeyboard useChosenEmoji={addToTitle} pickerStyle={emoji_keyboard_style}/>
    </div>
  );
}

export default StoryForm;
