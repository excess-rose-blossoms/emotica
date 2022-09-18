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
  const [chosenField, setChosenField] = useState("title");
  const FIELDTITLE = "title";
  const FIELDDESCRIPTION = "description";
  const FIELDAUTHOR = "author";
  const FIELDBODY = "body";
  const NOEMOJIREGEX = /\P{Extended_Pictographic}/u;

  const field_style = {border: '2px solid black', fontSize: '1.5rem', resize: 'none'};
  const emoji_keyboard_style = {paddingTop: '1rem', paddingBottom: '1rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', width: '100%', flex: '1', boxShadow: 'none', fontFamily: 'Menlo', border: '2px black solid', color:'black !important'}

  // const validate = (values) => {
  //   const errors = {};

  //   if (!values.title) {
  //     errors.title = "Required!";
  //   }
  //   if (!values.description) {
  //     errors.description = "Required!";
  //   }
  //   if (!values.author) {
  //     errors.author = "Required!";
  //   }
  //   if (!values.body) {
  //     errors.body = "Required!";
  //   }
  //   return errors;
  // };


  const addEmojiToChosenValue = (emoji) => {
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

  const handleChange = (event) => {
    if (NOEMOJIREGEX.test(event.target.value)) {
      return;
    }

    switch(chosenField) {
      case FIELDTITLE:
        setTitle(event.target.value);
        break;
      case FIELDDESCRIPTION:
        setDescription(event.target.value);
        break;
      case FIELDAUTHOR:
        setAuthor(event.target.value);
        break;
      case FIELDBODY:
        setBody(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addStory({
      title,
      description,
      author,
      body
    }));

    // clear all fields
    setTitle("");
    setDescription("");
    setAuthor("");
    setBody("");
  } 

  return (
    <div className="form-container" onSubmit={handleSubmit}>
        <form className="form">
          <div className="row-container">
          <label className="form-row" htmlFor="title">
            <span className="text">TITLE<br/></span> <input className="field" id="title" name="title" value={title} onChange={handleChange} onFocus={() => setChosenField(FIELDTITLE)} style={field_style}/>
          </label>

          <label className="form-row" htmlFor="author">
            <span className="text">AUTHOR<br/></span> <input className="field" id="author" name="author" value={author} onChange={handleChange} onFocus={() => setChosenField(FIELDAUTHOR)} style={field_style}/>
          </label>

          <label className="form-row" htmlFor="description">
            <span className="text">SUMMARY<br/></span> <input className="field" id="description" name="description" value={description} onChange={handleChange} onFocus={() => setChosenField(FIELDDESCRIPTION)} style={field_style}/>
          </label>

          <label className="form-row-body" htmlFor="body">
            <span className="text">BODY<br/></span> <input className="field" id="body" name="body" as="textarea" value={body} onChange={handleChange} onFocus={() => setChosenField(FIELDBODY)} style={field_style}/>
          </label>
          </div>
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
        </form>
      <EmojiKeyboard useChosenEmoji={addEmojiToChosenValue} pickerStyle={emoji_keyboard_style}/>
    </div>
  );
}

export default StoryForm;
