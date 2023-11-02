import { Box, Container, Typography } from "@mui/material";

const Footer: React.FC = () => {

    return (
        <Box pt='.9375rem' pb='.9375rem'>
            <Container maxWidth="lg">
                <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    fontSize='12px'>
                    {'© 2023 CreativeDevMind™. Todos os direitos reservados. '}
                </Typography>
            </Container>
        </Box>
    )
}

export { Footer };