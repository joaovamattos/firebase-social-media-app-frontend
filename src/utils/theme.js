export default {
    palette: {
        primary: {
          light: '#ff6e40',
          main: '#ff3d00',
          dark: '#dd2c00',
          contrastText: '#ffffff'
        },
        secondary: {
          light: '#303f9f',
          main: '#283593',
          dark: '#1a237e',
          contrastText: '#ffffff'
        }
      },

    spreadThis: {
        typography: {
            useNextVariants: true
        },
        form: {
            textAlign: 'center'
        },
        image: {
            width: 60,
            margin: '20px auto'
        },
        pageTitle: {
            margin: '10px auto'
        },
        textField: {
            margin: '10px auto'
        },
        button: {
            marginTop: 20,
            position: 'relative'
        },
        customError: {
            color: 'red',
            fontSize: '0.8rem',
            marginTop: 10
        },
        progress: {
            position: 'absolute'
        },        
        invisibleSeparator: {
            border: 'none',
            magin: 4
        },
        visibleSeparator: {
            width: '100%',
            borderBottom: '1px solid rgba(0,0,0,0.1)',
            maginBottom: 20
        },
        paper: {
            padding: 20
          },
          profile: {
            "& .image-wrapper": {
              textAlign: "center",
              position: "relative",
              "& button": {
                position: "absolute",
                top: "80%",
                left: "70%"
              }
            },
            "& .profile-image": {
              width: 200,
              height: 200,
              objectFit: "cover",
              backgroundSize: "cover",
              maxWidth: "100%",
              borderRadius: "50%"
            },
            "& .profile-details": {
              textAlign: "center",
              "& span, svg": {
                verticalAlign: "middle"
              },
              "& a": {
                color: '#ff3d00'
              }
            },
            "& hr": {
              border: "none",
              margin: "0 0 10px 0"
            },
            "& svg.button": {
              "&:hover": {
                cursor: "pointer"
              }
            }
          },
          buttons: {
            textAlign: "center",
            "& a": {
              margin: "20px 10px"
            }
          }
    }
}