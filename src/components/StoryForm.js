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

  const validate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = "(Required title!)";
    }
    if (!values.description) {
      errors.description = "(Required description!)";
    }
    if (!values.author) {
      errors.author = "(Required author!)";
    }
    if (!values.body) {
      errors.body = "(Required body!)";
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
          <label htmlFor="title">
            Title: <ErrorMessage className="error-message" name="title"/>
          </label>
          <Field id="title" name="title" value={title} onFocus={() => setChosenField(FIELDTITLE)}/>

          <label htmlFor="author">
            Author: <ErrorMessage className="error-message" name="author" />
          </label>
          <Field id="author" name="author" value={author} onFocus={() => setChosenField(FIELDAUTHOR)}/>

          <label htmlFor="description">
            Description:{" "}
            <ErrorMessage className="error-message" name="description" />
          </label>
          <Field id="description" name="description" value={description} onFocus={() => setChosenField(FIELDDESCRIPTION)}/>

          <label htmlFor="body">
            Body: <ErrorMessage className="error-message" name="body" />
          </label>
          <Field className="body" id="body" name="body" as="textarea" value={body} onFocus={() => setChosenField(FIELDBODY)}/>

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
      <EmojiKeyboard useChosenEmoji={addToTitle} pickerStyle={{ width: '100%', flex: '1', borderShadow: 'none'}}/>
    </div>
  );
}

export default StoryForm;
