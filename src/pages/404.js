import { Box } from '@material-ui/core';
import {useTheme} from '@material-ui/core/styles';


const Page404 = () => {
    const theme = useTheme();

    return (
        <Box px={{ xs: 2, sm: 3 }} width="100%" height="100vh" bgcolor={theme.palette.success.main}>
            <h1>Esta página no existe!</h1>
        </Box>
    )
}

export default Page404;