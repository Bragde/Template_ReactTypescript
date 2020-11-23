import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const AddPubBtn = (): JSX.Element => {
  return (
    <Button animated="fade">
      <Button.Content visible>Lägg till krog</Button.Content>
      <Button.Content hidden>
        <Icon name="arrow right" />
      </Button.Content>
    </Button>
  );
};

export default AddPubBtn;
