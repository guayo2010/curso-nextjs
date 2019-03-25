import Head from 'next/head';
import React from 'react';

class ContactPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Head>
          <title>Pagina contactos</title>
        </Head>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}

export default ContactPage;
