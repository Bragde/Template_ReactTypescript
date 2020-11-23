import React from 'react';
import { Form } from 'semantic-ui-react';

// TEMP dropdown options for development
const options = [
  { key: '1', text: 'Hak', value: 'Hak' },
  { key: '2', text: 'Restaurant', value: 'Restaurant' },
  { key: '3', text: 'Sportbar', value: 'Sportbar' },
];

export default function AddPub(): JSX.Element {
  return (
    <>
      <h2>LÄGG TILL NY KROG</h2>
      <Form>
        <Form.Group widths="equal">
          <Form.Input fluid label="Namn" placeholder="Krognamn" />
        </Form.Group>
        <label>Betyg</label>
        <Form.Group>
          <Form.Field inline>
            <label>Folk</label>
            <input placeholder="1-5" />
          </Form.Field>
          <Form.Field inline>
            <Form.Input label="Atmosfär" placeholder="1-5" />
          </Form.Field>
          <Form.Field inline>
            <Form.Input label="Mat" placeholder="1-5" />
          </Form.Field>
          <Form.Field inline>
            <Form.Input label="Öl" placeholder="1-5" />
          </Form.Field>
        </Form.Group>
        <fieldset>
          <legend>Taggar</legend>
          <Form.Group widths="equal">
            <Form.Select
              label="Välj bland befintliga"
              options={options}
              placeholder="Välj tagg..."
            />
            <Form.Input label="Skapa ny tagg" placeholder="Namn" />
          </Form.Group>
        </fieldset>
        <Form.TextArea
          label="Beskrivning"
          placeholder="Beskrivning av krog..."
        />
      </Form>
    </>
  );
}
