import React from 'react';

// Компонент высшего порядка, который применяет шрифт Montserrat ко всем компонентам
const withMontserratFont = (WrappedComponent) => {
  const WithMontserratFont = (props) => {
    const fontStyle = {
      fontFamily: 'Montserrat, Arial, Helvetica !important'
    };

    // Применяем стили шрифта к корневому элементу компонента
    return (
      <div style={fontStyle}>
        <WrappedComponent {...props} fontStyle={fontStyle} />
      </div>
    );
  };

  return WithMontserratFont;
};

export default withMontserratFont;