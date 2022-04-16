import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [stories, setStories] = useState([]);

  const validate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = 'Required title!';
    }
    if (!values.description) {
      errors.description = 'Required description!';
    }
    if (!values.author) {
      errors.author = 'Required author!';
    }
    if (!values.body) {
      errors.body = 'Required body!';
    }
    return errors;
  };

  return (
    <div className="App">
      <Formik
        initialValues={{
          title: '',
          description: '',
          author:'',
          body: ''
        }}
        onSubmit={(values, actions) => {
          setStories(previousState => {
            return [ ...previousState, values ]
          });
          actions.resetForm({
            values: {
              title: '',
              description: '',
              author:'',
              body: ''
            }
          })
        }}
        validate={validate}
      >
        <Form>
          <label htmlFor="title">Title: </label>
          <Field id="title" name="title"/>
          <ErrorMessage name="title" /><br />

          <label htmlFor="description">Description: </label>
          <Field id="description" name="description"/> 
          <ErrorMessage name="description" /><br />

          <label htmlFor="author">Author: </label>
          <Field id="author" name="author"/>
          <ErrorMessage name="author" /><br />

          <label htmlFor="body">Body: </label>
          <Field id="body" name="body" as="textarea"/>
          <ErrorMessage name="body" /><br />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {
        stories.map(story => (
          <Card style={{ width: '18rem' }}>
            <Card.Header>{story.author}</Card.Header>
            <Card.Body>
              <Card.Title>{story.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{story.description}</Card.Subtitle>
              <Card.Text>
                {story.body}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      }
    </div>
  );
}

export default App;
