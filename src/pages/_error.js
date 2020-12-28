/* Componente para controlar los errores desde el servidor y el cliente */
import Page404 from './404';
import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const Error = ({ statusCode }) => {
    const theme = useTheme();

    if (statusCode == 404) {
        return <Page404 />;
    }
    else {
        return (
            <Box px={{ xs: 2, sm: 3 }} width="100%" height="100vh" bgcolor={theme.palette.success.main}>
                <h2>Error: {statusCode} </h2>
            </Box>
        )
    }
}


//Este método los usamos para controlar los errores específicos desde nuestro servidor del FRONT.
//Pero podemos reutilizar nuestro componente de error en otros lugares
Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode }
}

export default Error;