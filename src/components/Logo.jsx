import '@fontsource/rubik'

export const Logo = () => {
    const LogoStyled = {
        fontSize: '46px',
        fontFamily: "Rubik, sans-serif",
        color: 'black',
        padding: '8px',
        justifySelf: 'center',
    };
    
    return <div style={LogoStyled}><b>&lt;H</b><span style={{ color: 'rgb(241, 151, 32)' }}>old</span><b>TML/&gt;</b></div>
  };
