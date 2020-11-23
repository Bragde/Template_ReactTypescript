import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

const AddPubBtn = (): JSX.Element => {
  return (
    <Link to="/addpub">
      <Button animated="fade">
        <Button.Content visible>Lägg till krog</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </Link>
  );
};

export default AddPubBtn;
