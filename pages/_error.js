import React from 'react';
import Template from '../components/Template';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;
    return (
      <Template>
        <div style={{ minHeight: 300, paddingTop: 100, textAlign: 'center' }}>
          <p style={{ color: '#f00', fontSize: 40 }}>{statusCode}</p>
          <p>
            {statusCode === 404
              ? 'La pagina que buscas no existe'
              : 'Hubo un error al cargar la pagina'}
          </p>
        </div>
      </Template>
    );
  }
}

export default Error;
