import { Formik, Field, Form } from 'formik';
import { useState } from 'react';

function App() {
  const [story, setStory] = useState([]);

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
          setStory(previousState => {
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
      >
        <Form>
          <label htmlFor="title">Title: </label>
          <Field id="title" name="title"/><br />

          <label htmlFor="description">Description: </label>
          <Field id="description" name="description"/> <br />

          <label htmlFor="author">Author: </label>
          <Field id="author" name="author"/><br />

          <label htmlFor="body">Body: </label>
          <Field id="body" name="body" as="textarea"/><br />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
